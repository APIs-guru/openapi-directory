package shared

type AttractionTypeEnum string

const (
	AttractionTypeEnumEvent      AttractionTypeEnum = "event"
	AttractionTypeEnumVenue      AttractionTypeEnum = "venue"
	AttractionTypeEnumAttraction AttractionTypeEnum = "attraction"
)

type Attraction struct {
	Active          *bool                    `json:"active"`
	AdditionalInfos map[string]string        `json:"additionalInfos"`
	Classifications []Classification         `json:"classifications"`
	Descriptions    map[string]string        `json:"descriptions"`
	Discoverable    *bool                    `json:"discoverable"`
	Images          []Image                  `json:"images"`
	Names           map[string]string        `json:"names"`
	References      map[string]string        `json:"references"`
	Relationships   []map[string]interface{} `json:"relationships"`
	Source          *Source                  `json:"source"`
	Test            *bool                    `json:"test"`
	Type            AttractionTypeEnum       `json:"type"`
	URL             *string                  `json:"url"`
	Version         *int64                   `json:"version"`
}
