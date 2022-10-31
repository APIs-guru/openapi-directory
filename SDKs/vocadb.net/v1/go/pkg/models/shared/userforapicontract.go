package shared

import (
"time")


type UserForAPIContractGroupIDEnum string

const (
    UserForAPIContractGroupIDEnumNothing UserForAPIContractGroupIDEnum = "Nothing"
UserForAPIContractGroupIDEnumLimited UserForAPIContractGroupIDEnum = "Limited"
UserForAPIContractGroupIDEnumRegular UserForAPIContractGroupIDEnum = "Regular"
UserForAPIContractGroupIDEnumTrusted UserForAPIContractGroupIDEnum = "Trusted"
UserForAPIContractGroupIDEnumModerator UserForAPIContractGroupIDEnum = "Moderator"
UserForAPIContractGroupIDEnumAdmin UserForAPIContractGroupIDEnum = "Admin"
)


type UserForAPIContract struct {
    Active *bool `json:"active,omitempty"`
    GroupID *UserForAPIContractGroupIDEnum `json:"groupId,omitempty"`
    ID *int32 `json:"id,omitempty"`
    KnownLanguages []UserKnownLanguageContract `json:"knownLanguages,omitempty"`
    MainPicture *EntryThumbForAPIContract `json:"mainPicture,omitempty"`
    MemberSince *time.Time `json:"memberSince,omitempty"`
    Name *string `json:"name,omitempty"`
    OldUsernames []OldUsernameContract `json:"oldUsernames,omitempty"`
    VerifiedArtist *bool `json:"verifiedArtist,omitempty"`
    
}

