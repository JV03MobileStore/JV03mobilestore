package com.JavaBootcamp03.mobilestore.repository;

import com.JavaBootcamp03.mobilestore.entity.CustomerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CustomerRepository extends JpaRepository<CustomerEntity, Integer> {
    CustomerEntity findByEmail(String email);

    CustomerEntity findById(int id);
    List<CustomerEntity> findByRoleCustomer_Id(int id);

    Boolean existsByEmail(String email);
}
