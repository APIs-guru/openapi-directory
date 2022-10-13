package shared

import (
	"time"
)

type SubUserDataPermissionLevelEnum string

const (
	SubUserDataPermissionLevelEnumSelectedFolderAndSubfoldersMeters SubUserDataPermissionLevelEnum = "SelectedFolderAndSubfoldersMeters"
	SubUserDataPermissionLevelEnumSelectedFolderOnly                SubUserDataPermissionLevelEnum = "SelectedFolderOnly"
)

type SubUserData struct {
	AccessEndDate       *time.Time                      `json:"AccessEndDate" form:"name=AccessEndDate"`
	AccessTimeStartDate *time.Time                      `json:"AccessTimeStartDate" form:"name=AccessTimeStartDate"`
	Email               *string                         `json:"Email" form:"name=Email"`
	ID                  *string                         `json:"Id" form:"name=Id"`
	NewPassword         *string                         `json:"NewPassword" form:"name=NewPassword"`
	PermissionLevel     *SubUserDataPermissionLevelEnum `json:"PermissionLevel" form:"name=PermissionLevel"`
	Username            *string                         `json:"Username" form:"name=Username"`
}
