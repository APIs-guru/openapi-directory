package shared

import (
	"time"
)

type UserToken struct {
	AuditActions                 []string
	CheckSecretWord              *bool
	Created                      *time.Time
	Expiration                   *time.Time
	ExternalStandards            []ExternalStandard
	GroupFeatures                []Feature
	GroupMessagingEnabled        *bool
	MustSetSecretWord            *bool
	PatientFeatures              []Feature
	PatientMessagingFeatureTypes []string
	PatientRoles                 []Role
	Routes                       []Route
	SecretWord                   *string
	SecretWordChoices            map[string]interface{}
	SecretWordIndexes            []string
	SecretWordSalt               *string
	SecretWordToken              *string
	SecurityRoles                []Role
	ShouldEnterCondition         *bool
	StaffFeatures                []Feature
	StaffRoles                   []Role
	Token                        *string
	User                         *User
	UserFeatures                 []Feature
	UserGroups                   []BaseGroup
}
