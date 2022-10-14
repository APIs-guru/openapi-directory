package shared

type UserKnownLanguageContractProficiencyEnum string

const (
	UserKnownLanguageContractProficiencyEnumNothing      UserKnownLanguageContractProficiencyEnum = "Nothing"
	UserKnownLanguageContractProficiencyEnumBasics       UserKnownLanguageContractProficiencyEnum = "Basics"
	UserKnownLanguageContractProficiencyEnumIntermediate UserKnownLanguageContractProficiencyEnum = "Intermediate"
	UserKnownLanguageContractProficiencyEnumAdvanced     UserKnownLanguageContractProficiencyEnum = "Advanced"
	UserKnownLanguageContractProficiencyEnumNative       UserKnownLanguageContractProficiencyEnum = "Native"
)

type UserKnownLanguageContract struct {
	CultureCode *string                                   `json:"cultureCode,omitempty"`
	Proficiency *UserKnownLanguageContractProficiencyEnum `json:"proficiency,omitempty"`
}
