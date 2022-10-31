package shared

import (
"time")


type SubUserDataPermissionLevelEnum string

const (
    SubUserDataPermissionLevelEnumSelectedFolderAndSubfoldersMeters SubUserDataPermissionLevelEnum = "SelectedFolderAndSubfoldersMeters"
SubUserDataPermissionLevelEnumSelectedFolderOnly SubUserDataPermissionLevelEnum = "SelectedFolderOnly"
)


type SubUserData struct {
    AccessEndDate *time.Time `json:"AccessEndDate,omitempty" form:"name=AccessEndDate"`
    AccessTimeStartDate *time.Time `json:"AccessTimeStartDate,omitempty" form:"name=AccessTimeStartDate"`
    Email *string `json:"Email,omitempty" form:"name=Email"`
    ID *string `json:"Id,omitempty" form:"name=Id"`
    NewPassword *string `json:"NewPassword,omitempty" form:"name=NewPassword"`
    PermissionLevel *SubUserDataPermissionLevelEnum `json:"PermissionLevel,omitempty" form:"name=PermissionLevel"`
    Username *string `json:"Username,omitempty" form:"name=Username"`
    
}

