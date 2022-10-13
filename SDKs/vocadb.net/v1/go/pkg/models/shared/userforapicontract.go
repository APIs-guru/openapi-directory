package shared

import (
	"time"
)

type UserForAPIContractGroupIDEnum string

const (
	UserForAPIContractGroupIDEnumNothing   UserForAPIContractGroupIDEnum = "Nothing"
	UserForAPIContractGroupIDEnumLimited   UserForAPIContractGroupIDEnum = "Limited"
	UserForAPIContractGroupIDEnumRegular   UserForAPIContractGroupIDEnum = "Regular"
	UserForAPIContractGroupIDEnumTrusted   UserForAPIContractGroupIDEnum = "Trusted"
	UserForAPIContractGroupIDEnumModerator UserForAPIContractGroupIDEnum = "Moderator"
	UserForAPIContractGroupIDEnumAdmin     UserForAPIContractGroupIDEnum = "Admin"
)

type UserForAPIContract struct {
	Active         *bool                          `json:"active"`
	GroupID        *UserForAPIContractGroupIDEnum `json:"groupId"`
	ID             *int32                         `json:"id"`
	KnownLanguages []UserKnownLanguageContract    `json:"knownLanguages"`
	MainPicture    *EntryThumbForAPIContract      `json:"mainPicture"`
	MemberSince    *time.Time                     `json:"memberSince"`
	Name           *string                        `json:"name"`
	OldUsernames   []OldUsernameContract          `json:"oldUsernames"`
	VerifiedArtist *bool                          `json:"verifiedArtist"`
}
