package shared

type AnnotationLayerAnnotationTypeEnum string

const (
	AnnotationLayerAnnotationTypeEnumFormula    AnnotationLayerAnnotationTypeEnum = "FORMULA"
	AnnotationLayerAnnotationTypeEnumInterval   AnnotationLayerAnnotationTypeEnum = "INTERVAL"
	AnnotationLayerAnnotationTypeEnumEvent      AnnotationLayerAnnotationTypeEnum = "EVENT"
	AnnotationLayerAnnotationTypeEnumTimeSeries AnnotationLayerAnnotationTypeEnum = "TIME_SERIES"
)

type AnnotationLayerOpacityEnum string

const (
	AnnotationLayerOpacityEnumUnknown       AnnotationLayerOpacityEnum = ""
	AnnotationLayerOpacityEnumOpacityLow    AnnotationLayerOpacityEnum = "opacityLow"
	AnnotationLayerOpacityEnumOpacityMedium AnnotationLayerOpacityEnum = "opacityMedium"
	AnnotationLayerOpacityEnumOpacityHigh   AnnotationLayerOpacityEnum = "opacityHigh"
)

type AnnotationLayerSourceTypeEnum string

const (
	AnnotationLayerSourceTypeEnumUnknown AnnotationLayerSourceTypeEnum = ""
	AnnotationLayerSourceTypeEnumLine    AnnotationLayerSourceTypeEnum = "line"
	AnnotationLayerSourceTypeEnumNative  AnnotationLayerSourceTypeEnum = "NATIVE"
	AnnotationLayerSourceTypeEnumTable   AnnotationLayerSourceTypeEnum = "table"
)

type AnnotationLayerStyleEnum string

const (
	AnnotationLayerStyleEnumDashed     AnnotationLayerStyleEnum = "dashed"
	AnnotationLayerStyleEnumDotted     AnnotationLayerStyleEnum = "dotted"
	AnnotationLayerStyleEnumSolid      AnnotationLayerStyleEnum = "solid"
	AnnotationLayerStyleEnumLongDashed AnnotationLayerStyleEnum = "longDashed"
)

type AnnotationLayer struct {
	AnnotationType     *AnnotationLayerAnnotationTypeEnum `json:"annotationType"`
	Color              *string                            `json:"color"`
	DescriptionColumns []string                           `json:"descriptionColumns"`
	HideLine           *bool                              `json:"hideLine"`
	IntervalEndColumn  *string                            `json:"intervalEndColumn"`
	Name               string                             `json:"name"`
	Opacity            *AnnotationLayerOpacityEnum        `json:"opacity"`
	Overrides          map[string]interface{}             `json:"overrides"`
	Show               bool                               `json:"show"`
	ShowMarkers        bool                               `json:"showMarkers"`
	SourceType         *AnnotationLayerSourceTypeEnum     `json:"sourceType"`
	Style              *AnnotationLayerStyleEnum          `json:"style"`
	TimeColumn         *string                            `json:"timeColumn"`
	TitleColumn        *string                            `json:"titleColumn"`
	Value              interface{}                        `json:"value"`
	Width              *float32                           `json:"width"`
}
