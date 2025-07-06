package com.example.usermanagement.repository;

import com.example.usermanagement.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.query.Param;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // HQL (JPQL): Find user by name
    @Query("SELECT u FROM User u WHERE u.name = :name")
    User findByName(@Param("name") String name);

    // Native SQL: Find user by email
    @Query(value = "SELECT * FROM user WHERE email = :email", nativeQuery = true)
    User findByEmailNative(@Param("email") String email);

    // Aggregate: Count all users
    @Query("SELECT COUNT(u) FROM User u")
    long countUsers();

    // Aggregate: Average age
    @Query("SELECT AVG(u.age) FROM User u")
    Double averageAge();

    // Fetch all users (placeholder for fetch join if needed)
    @Query("SELECT u FROM User u")
    List<User> fetchAllUsers();
}
