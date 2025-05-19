package com.authentify.service;

import com.authentify.entity.UserEntity;
import com.authentify.io.ProfileRequest;
import com.authentify.io.ProfileResponse;
import com.authentify.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ProfileServiceImpl implements ProfileService{

    private final UserRepository userRepository;

    @Override
    public ProfileResponse createPrfile(ProfileRequest request) {
        UserEntity newProfile = convertToUSerEntity(request);
        newProfile = userRepository.save(newProfile);
        return convertToProfileResponse(newProfile);
    }

    private UserEntity convertToUSerEntity(ProfileRequest request) {
        return UserEntity.builder()
                .email(request.getEmail())
                .userID(UUID.randomUUID().toString())
                .name(request.getName())
                .password(request.getPassword())
                .isAccountVerified(false)
                .resetOtpExpireAt(0L)
                .verifyOtp(null)
                .verifyOtpExpireAt(0L)
                .resetOtp(null)
                .build();
    }

    private ProfileResponse convertToProfileResponse(UserEntity newProfile) {
        return ProfileResponse.builder()
                .name(newProfile.getName())
                .email(newProfile.getEmail())
                .userId(newProfile.getUserID())
                .isAccountVerified(newProfile.isAccountVerified())
                .build();
        
    }
}
