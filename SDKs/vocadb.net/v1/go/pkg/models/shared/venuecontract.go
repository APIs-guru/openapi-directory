package shared

type VenueContractStatusEnum string

const (
	VenueContractStatusEnumDraft    VenueContractStatusEnum = "Draft"
	VenueContractStatusEnumFinished VenueContractStatusEnum = "Finished"
	VenueContractStatusEnumApproved VenueContractStatusEnum = "Approved"
	VenueContractStatusEnumLocked   VenueContractStatusEnum = "Locked"
)

type VenueContract struct {
	AdditionalNames    *string                   `json:"additionalNames"`
	Address            *string                   `json:"address"`
	AddressCountryCode *string                   `json:"addressCountryCode"`
	Coordinates        *OptionalGeoPointContract `json:"coordinates"`
	Deleted            *bool                     `json:"deleted"`
	Description        *string                   `json:"description"`
	ID                 *int32                    `json:"id"`
	Name               *string                   `json:"name"`
	Status             *VenueContractStatusEnum  `json:"status"`
	Version            *int32                    `json:"version"`
	WebLinks           []WebLinkContract         `json:"webLinks"`
}
