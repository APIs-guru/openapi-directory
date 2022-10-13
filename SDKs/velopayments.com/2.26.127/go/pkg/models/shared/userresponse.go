package shared

import (
	"time"
)

type UserResponseMfaStatusEnum string

const (
	UserResponseMfaStatusEnumRegistered   UserResponseMfaStatusEnum = "REGISTERED"
	UserResponseMfaStatusEnumUnregistered UserResponseMfaStatusEnum = "UNREGISTERED"
)

type UserResponseMfaTypeEnum string

const (
	UserResponseMfaTypeEnumSms     UserResponseMfaTypeEnum = "SMS"
	UserResponseMfaTypeEnumYubikey UserResponseMfaTypeEnum = "YUBIKEY"
	UserResponseMfaTypeEnumTotp    UserResponseMfaTypeEnum = "TOTP"
)

type UserResponseStatusEnum string

const (
	UserResponseStatusEnumEnabled  UserResponseStatusEnum = "ENABLED"
	UserResponseStatusEnumDisabled UserResponseStatusEnum = "DISABLED"
	UserResponseStatusEnumPending  UserResponseStatusEnum = "PENDING"
)

type UserResponse struct {
	Email                  *string                    `json:"email"`
	EntityID               *string                    `json:"entityId"`
	FirstName              *string                    `json:"firstName"`
	ID                     *string                    `json:"id"`
	LastName               *string                    `json:"lastName"`
	LockedOut              *bool                      `json:"lockedOut"`
	LockedOutTimestamp     *time.Time                 `json:"lockedOutTimestamp"`
	MfaStatus              *UserResponseMfaStatusEnum `json:"mfaStatus"`
	MfaType                *UserResponseMfaTypeEnum   `json:"mfaType"`
	PrimaryContactNumber   *string                    `json:"primaryContactNumber"`
	Roles                  []Role                     `json:"roles"`
	SecondaryContactNumber *string                    `json:"secondaryContactNumber"`
	SmsNumber              *string                    `json:"smsNumber"`
	Status                 *UserResponseStatusEnum    `json:"status"`
}
