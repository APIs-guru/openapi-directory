package shared




type AttractionTypeEnum string

const (
    AttractionTypeEnumEvent AttractionTypeEnum = "event"
AttractionTypeEnumVenue AttractionTypeEnum = "venue"
AttractionTypeEnumAttraction AttractionTypeEnum = "attraction"
)


type Attraction struct {
    Active *bool `json:"active,omitempty"`
    AdditionalInfos map[string]string `json:"additionalInfos,omitempty"`
    Classifications []Classification `json:"classifications,omitempty"`
    Descriptions map[string]string `json:"descriptions,omitempty"`
    Discoverable *bool `json:"discoverable,omitempty"`
    Images []Image `json:"images,omitempty"`
    Names map[string]string `json:"names,omitempty"`
    References map[string]string `json:"references,omitempty"`
    Relationships []map[string]interface{} `json:"relationships,omitempty"`
    Source *Source `json:"source,omitempty"`
    Test *bool `json:"test,omitempty"`
    Type AttractionTypeEnum `json:"type"`
    URL *string `json:"url,omitempty"`
    Version *int64 `json:"version,omitempty"`
    
}

