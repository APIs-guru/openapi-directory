package shared

import (
	"time"
)

type User struct {
	APIKey                     *APIKey
	CanSwitchUser              *bool
	ChangePassword             *bool
	ContactNumber              *string
	Created                    *time.Time
	CurrentLogin               *time.Time
	CurrentLoginIPAddress      *string
	DateOfBirth                *time.Time
	Deleted                    *bool
	Dummy                      *bool
	Email                      *string
	EmailVerified              *bool
	Forename                   *string
	GroupRoles                 []GroupRole
	HideSecretWordNotification *bool
	ID                         *int64
	Identifiers                []map[string]interface{}
	LastLogin                  *time.Time
	LastLoginIPAddress         *string
	LatestDataReceivedBy       *BaseGroup
	LatestDataReceivedDate     *time.Time
	Locked                     *bool
	Picture                    *string
	RoleDescription            *string
	SecretWordIsSet            *bool
	Surname                    *string
	UserFeatures               []UserFeature
	Username                   *string
}
