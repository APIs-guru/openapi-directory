package shared

type EntitlementRelatedEntityTypeEnum string

const (
	EntitlementRelatedEntityTypeEnumEvent      EntitlementRelatedEntityTypeEnum = "event"
	EntitlementRelatedEntityTypeEnumVenue      EntitlementRelatedEntityTypeEnum = "venue"
	EntitlementRelatedEntityTypeEnumAttraction EntitlementRelatedEntityTypeEnum = "attraction"
)

type EntitlementSourceEnum string

const (
	EntitlementSourceEnumTicketmaster EntitlementSourceEnum = "ticketmaster"
)

// Entitlement
// This class defines an entitlement data on the Publish API
type Entitlement struct {
	Data                map[string]interface{}           `json:"data"`
	RelatedEntityID     *string                          `json:"relatedEntityId,omitempty"`
	RelatedEntitySource *Source                          `json:"relatedEntitySource,omitempty"`
	RelatedEntityType   EntitlementRelatedEntityTypeEnum `json:"relatedEntityType"`
	Source              EntitlementSourceEnum            `json:"source"`
	VersionNumber       *int64                           `json:"versionNumber,omitempty"`
}
