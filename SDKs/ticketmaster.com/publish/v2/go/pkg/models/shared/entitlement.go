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

type Entitlement struct {
	Data                map[string]interface{}           `json:"data"`
	RelatedEntityID     *string                          `json:"relatedEntityId"`
	RelatedEntitySource *Source                          `json:"relatedEntitySource"`
	RelatedEntityType   EntitlementRelatedEntityTypeEnum `json:"relatedEntityType"`
	Source              EntitlementSourceEnum            `json:"source"`
	VersionNumber       *int64                           `json:"versionNumber"`
}
