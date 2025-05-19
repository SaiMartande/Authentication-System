package com.authentify.service;

import com.authentify.io.ProfileRequest;
import com.authentify.io.ProfileResponse;

public interface ProfileService {

    ProfileResponse createPrfile(ProfileRequest request);
}
