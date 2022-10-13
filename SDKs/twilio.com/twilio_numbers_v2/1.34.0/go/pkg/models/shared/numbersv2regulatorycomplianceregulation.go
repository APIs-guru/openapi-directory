package shared

type NumbersV2RegulatoryComplianceRegulation struct {
	EndUserType  *RegulationEnumEndUserTypeEnum `json:"end_user_type"`
	FriendlyName *string                        `json:"friendly_name"`
	IsoCountry   *string                        `json:"iso_country"`
	NumberType   *string                        `json:"number_type"`
	Requirements *interface{}                   `json:"requirements"`
	Sid          *string                        `json:"sid"`
	URL          *string                        `json:"url"`
}
