package shared




type VenueContractStatusEnum string

const (
    VenueContractStatusEnumDraft VenueContractStatusEnum = "Draft"
VenueContractStatusEnumFinished VenueContractStatusEnum = "Finished"
VenueContractStatusEnumApproved VenueContractStatusEnum = "Approved"
VenueContractStatusEnumLocked VenueContractStatusEnum = "Locked"
)


type VenueContract struct {
    AdditionalNames *string `json:"additionalNames,omitempty"`
    Address *string `json:"address,omitempty"`
    AddressCountryCode *string `json:"addressCountryCode,omitempty"`
    Coordinates *OptionalGeoPointContract `json:"coordinates,omitempty"`
    Deleted *bool `json:"deleted,omitempty"`
    Description *string `json:"description,omitempty"`
    ID *int32 `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    Status *VenueContractStatusEnum `json:"status,omitempty"`
    Version *int32 `json:"version,omitempty"`
    WebLinks []WebLinkContract `json:"webLinks,omitempty"`
    
}

