package com.JavaBootcamp03.mobilestore.repository;

import com.JavaBootcamp03.mobilestore.entity.RoleEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<RoleEntity,Integer> {
    RoleEntity findByName(String name);
    RoleEntity findById(int id);
}
