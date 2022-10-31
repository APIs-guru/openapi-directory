package shared

type AugmentationDataRelatedEntityTypeEnum string

const (
	AugmentationDataRelatedEntityTypeEnumEvent      AugmentationDataRelatedEntityTypeEnum = "event"
	AugmentationDataRelatedEntityTypeEnumAttraction AugmentationDataRelatedEntityTypeEnum = "attraction"
	AugmentationDataRelatedEntityTypeEnumVenue      AugmentationDataRelatedEntityTypeEnum = "venue"
)

type AugmentationData struct {
	Changes           []Change                              `json:"changes"`
	RelatedEntityID   string                                `json:"relatedEntityId"`
	RelatedEntityType AugmentationDataRelatedEntityTypeEnum `json:"relatedEntityType"`
	Score             *float32                              `json:"score,omitempty"`
	Source            string                                `json:"source"`
	VersionNumber     int64                                 `json:"versionNumber"`
}
