package shared

import (
"time")


type UserResponseMfaStatusEnum string

const (
    UserResponseMfaStatusEnumRegistered UserResponseMfaStatusEnum = "REGISTERED"
UserResponseMfaStatusEnumUnregistered UserResponseMfaStatusEnum = "UNREGISTERED"
)



type UserResponseMfaTypeEnum string

const (
    UserResponseMfaTypeEnumSms UserResponseMfaTypeEnum = "SMS"
UserResponseMfaTypeEnumYubikey UserResponseMfaTypeEnum = "YUBIKEY"
UserResponseMfaTypeEnumTotp UserResponseMfaTypeEnum = "TOTP"
)



type UserResponseStatusEnum string

const (
    UserResponseStatusEnumEnabled UserResponseStatusEnum = "ENABLED"
UserResponseStatusEnumDisabled UserResponseStatusEnum = "DISABLED"
UserResponseStatusEnumPending UserResponseStatusEnum = "PENDING"
)


type UserResponse struct {
    Email *string `json:"email,omitempty"`
    EntityID *string `json:"entityId,omitempty"`
    FirstName *string `json:"firstName,omitempty"`
    ID *string `json:"id,omitempty"`
    LastName *string `json:"lastName,omitempty"`
    LockedOut *bool `json:"lockedOut,omitempty"`
    LockedOutTimestamp *time.Time `json:"lockedOutTimestamp,omitempty"`
    MfaStatus *UserResponseMfaStatusEnum `json:"mfaStatus,omitempty"`
    MfaType *UserResponseMfaTypeEnum `json:"mfaType,omitempty"`
    PrimaryContactNumber *string `json:"primaryContactNumber,omitempty"`
    Roles []Role `json:"roles,omitempty"`
    SecondaryContactNumber *string `json:"secondaryContactNumber,omitempty"`
    SmsNumber *string `json:"smsNumber,omitempty"`
    Status *UserResponseStatusEnum `json:"status,omitempty"`
    
}

