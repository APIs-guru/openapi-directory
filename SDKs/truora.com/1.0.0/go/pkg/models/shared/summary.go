package shared

import (
	"time"
)

type SummaryGenderEnum string

const (
	SummaryGenderEnumMale   SummaryGenderEnum = "male"
	SummaryGenderEnumFemale SummaryGenderEnum = "female"
)

type SummaryIdentityStatusEnum string

const (
	SummaryIdentityStatusEnumFound    SummaryIdentityStatusEnum = "found"
	SummaryIdentityStatusEnumNotFound SummaryIdentityStatusEnum = "not_found"
	SummaryIdentityStatusEnumDead     SummaryIdentityStatusEnum = "dead"
)

// Summary
// Represents a background check summary
type Summary struct {
	DateOfBirth    *time.Time                 `json:"date_of_birth,omitempty"`
	DeathDate      *time.Time                 `json:"death_date,omitempty"`
	DriversLicense *string                    `json:"drivers_license,omitempty"`
	Gender         *SummaryGenderEnum         `json:"gender,omitempty"`
	IdentityStatus *SummaryIdentityStatusEnum `json:"identity_status,omitempty"`
	NamesFound     []NameFound                `json:"names_found"`
	Nss            *string                    `json:"nss,omitempty"`
	Rfc            *string                    `json:"rfc,omitempty"`
}
