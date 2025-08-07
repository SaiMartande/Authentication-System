package com.sai.authentify.controller;

import com.sai.authentify.dto.*;
import com.sai.authentify.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest request) {
        authService.register(request);
        return "Registration successful. Please login.";
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody AuthRequest request) {
        return authService.login(request);
    }

    @PostMapping("/verify-otp")
    public String verifyOtp(@RequestBody VerifyOtpRequest request) {
        authService.verifyOtp(request);
        return "Account verified. Please login again.";
    }

    @PostMapping("/generate-otp")
    public String generateOtp(@RequestBody GenerateOtpRequest request) {
        authService.generateOtp(request.getEmail());
        return "OTP sent successfully.";
    }


    @PostMapping("/forgot-password")
    public String forgotPassword(@RequestBody ForgotPasswordRequest request) {
        authService.forgotPassword(request);
        return "OTP sent to your email.";
    }

    @PostMapping("/verify-reset-otp")
    public String verifyResetOtp(@RequestBody VerifyOtpRequest request) {
        authService.verifyResetOtp(request);
        return "OTP verified. You can now reset your password.";
    }

    @PostMapping("/send-account-verification-otp")
    public String sendAccountVerificationOtp(@RequestBody GenerateOtpRequest request) {
        authService.generateOtp(request.getEmail());
        return "Verification OTP sent successfully.";
    }

    @PostMapping("/reset-password")
    public String resetPassword(@RequestBody ResetPasswordRequest request) {
        authService.resetPassword(request);
        return "Password reset successfully.";
    }
}

