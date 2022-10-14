package shared

type ExtensionDataRelatedEntityTypeEnum string

const (
	ExtensionDataRelatedEntityTypeEnumEvent      ExtensionDataRelatedEntityTypeEnum = "event"
	ExtensionDataRelatedEntityTypeEnumVenue      ExtensionDataRelatedEntityTypeEnum = "venue"
	ExtensionDataRelatedEntityTypeEnumAttraction ExtensionDataRelatedEntityTypeEnum = "attraction"
)

type ExtensionData struct {
	Data                map[string]interface{}             `json:"data"`
	RelatedEntityID     *string                            `json:"relatedEntityId,omitempty"`
	RelatedEntitySource *Source                            `json:"relatedEntitySource,omitempty"`
	RelatedEntityType   ExtensionDataRelatedEntityTypeEnum `json:"relatedEntityType"`
	Source              string                             `json:"source"`
	Type                string                             `json:"type"`
	VersionNumber       *int64                             `json:"versionNumber,omitempty"`
}
