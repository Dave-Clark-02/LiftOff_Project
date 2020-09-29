package org.launchcode.RAN.my.LAN.models.data;

import org.launchcode.RAN.my.LAN.models.ERole;
import org.launchcode.RAN.my.LAN.models.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(ERole name);
}