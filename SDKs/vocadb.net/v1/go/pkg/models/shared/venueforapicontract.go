package shared

type VenueForAPIContractStatusEnum string

const (
	VenueForAPIContractStatusEnumDraft    VenueForAPIContractStatusEnum = "Draft"
	VenueForAPIContractStatusEnumFinished VenueForAPIContractStatusEnum = "Finished"
	VenueForAPIContractStatusEnumApproved VenueForAPIContractStatusEnum = "Approved"
	VenueForAPIContractStatusEnumLocked   VenueForAPIContractStatusEnum = "Locked"
)

type VenueForAPIContract struct {
	AdditionalNames    *string                        `json:"additionalNames"`
	Address            *string                        `json:"address"`
	AddressCountryCode *string                        `json:"addressCountryCode"`
	Coordinates        *OptionalGeoPointContract      `json:"coordinates"`
	Description        *string                        `json:"description"`
	Events             []ReleaseEventContract         `json:"events"`
	ID                 *int32                         `json:"id"`
	Name               *string                        `json:"name"`
	Names              []LocalizedStringContract      `json:"names"`
	Status             *VenueForAPIContractStatusEnum `json:"status"`
	Version            *int32                         `json:"version"`
	WebLinks           []WebLinkForAPIContract        `json:"webLinks"`
}
