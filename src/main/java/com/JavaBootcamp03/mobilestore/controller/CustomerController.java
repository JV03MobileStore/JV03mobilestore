package com.JavaBootcamp03.mobilestore.controller;

import com.JavaBootcamp03.mobilestore.dto.CustomerDTO;
import com.JavaBootcamp03.mobilestore.entity.CustomerEntity;
import com.JavaBootcamp03.mobilestore.payload.response.ApiResponse;
import com.JavaBootcamp03.mobilestore.service.serviceInterface.CustomerServiceImp;
import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin
@RestController
@RequestMapping("/customer")
public class CustomerController {
    @Autowired
    private CustomerServiceImp customerServiceImp;

    @Autowired
    private ModelMapper modelMapper;

    private Logger logger = LoggerFactory.getLogger(CustomerController.class);

    public CustomerController(CustomerServiceImp customerServiceImp) {
        super();
        this.customerServiceImp = customerServiceImp;
    }

    @GetMapping("/list")
    public List<CustomerDTO> getCustomers(){
        logger.info("Customers are retrieved");
        return customerServiceImp.getAllCustomer()
                        .stream().map(customerList -> modelMapper.map(customerList, CustomerDTO.class))
                        .collect(Collectors.toList());
    }

    @GetMapping("/role/{roleID}")
    public List<CustomerDTO> getCustomersByRoleId(@PathVariable(name ="roleID") int roleID){
        logger.info("Customers are retrieved");

        return customerServiceImp.getCustomerByRoleId(roleID)
                        .stream().map(customerList -> modelMapper.map(customerList, CustomerDTO.class))
                        .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public ResponseEntity<CustomerDTO> getCustomerById(@PathVariable(name ="id") int id){
        logger.info("Customer is retrieved");
        CustomerEntity customerEntity = customerServiceImp.getCustomerById(id);

        CustomerDTO customerDTO = modelMapper.map(customerEntity, CustomerDTO.class);

        return ResponseEntity.ok().body(customerDTO);
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<CustomerDTO> getCustomerByEmail(@PathVariable(name ="email") String email){
        logger.info("Customer is retrieved");
        CustomerEntity customerEntity = customerServiceImp.getCustomerByEmail(email);

        CustomerDTO customerDTO = modelMapper.map(customerEntity, CustomerDTO.class);

            return ResponseEntity.ok().body(customerDTO);
    }

    @PostMapping("/create")
    public ResponseEntity<CustomerDTO> createCustomer(@RequestBody CustomerDTO customerDto){
        logger.info("Customer is created");

        CustomerEntity customer = customerServiceImp.createCustomer(customerDto);

        CustomerDTO customerResponse = modelMapper.map(customer, CustomerDTO.class);

        return new ResponseEntity<CustomerDTO>(customerResponse, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<CustomerDTO> updateCustomer(@PathVariable(name ="id") int id, @RequestBody CustomerDTO customerDto) {
        logger.info("Customer is updated");

        CustomerEntity customer = customerServiceImp.updateCustomer(id, customerDto);

        CustomerDTO customerResponse = modelMapper.map(customer, CustomerDTO.class);

        return new ResponseEntity<CustomerDTO>(customerResponse, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> deleteCustomer(@PathVariable(name ="id") int id){
        logger.info("Customer is deleted");
        customerServiceImp.deleteCustomer(id);

        ApiResponse apiResponse = new ApiResponse(Boolean.TRUE, 200, "Customer is deleted successfully","");

        return new ResponseEntity<ApiResponse>(apiResponse, HttpStatus.OK);
    }
}
