package shared

type VenueForAPIContractStatusEnum string

const (
	VenueForAPIContractStatusEnumDraft    VenueForAPIContractStatusEnum = "Draft"
	VenueForAPIContractStatusEnumFinished VenueForAPIContractStatusEnum = "Finished"
	VenueForAPIContractStatusEnumApproved VenueForAPIContractStatusEnum = "Approved"
	VenueForAPIContractStatusEnumLocked   VenueForAPIContractStatusEnum = "Locked"
)

type VenueForAPIContract struct {
	AdditionalNames    *string                        `json:"additionalNames,omitempty"`
	Address            *string                        `json:"address,omitempty"`
	AddressCountryCode *string                        `json:"addressCountryCode,omitempty"`
	Coordinates        *OptionalGeoPointContract      `json:"coordinates,omitempty"`
	Description        *string                        `json:"description,omitempty"`
	Events             []ReleaseEventContract         `json:"events,omitempty"`
	ID                 *int32                         `json:"id,omitempty"`
	Name               *string                        `json:"name,omitempty"`
	Names              []LocalizedStringContract      `json:"names,omitempty"`
	Status             *VenueForAPIContractStatusEnum `json:"status,omitempty"`
	Version            *int32                         `json:"version,omitempty"`
	WebLinks           []WebLinkForAPIContract        `json:"webLinks,omitempty"`
}
