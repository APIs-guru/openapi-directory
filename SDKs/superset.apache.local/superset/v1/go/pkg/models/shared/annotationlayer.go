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
	AnnotationType     *AnnotationLayerAnnotationTypeEnum `json:"annotationType,omitempty"`
	Color              *string                            `json:"color,omitempty"`
	DescriptionColumns []string                           `json:"descriptionColumns,omitempty"`
	HideLine           *bool                              `json:"hideLine,omitempty"`
	IntervalEndColumn  *string                            `json:"intervalEndColumn,omitempty"`
	Name               string                             `json:"name"`
	Opacity            *AnnotationLayerOpacityEnum        `json:"opacity,omitempty"`
	Overrides          map[string]interface{}             `json:"overrides,omitempty"`
	Show               bool                               `json:"show"`
	ShowMarkers        bool                               `json:"showMarkers"`
	SourceType         *AnnotationLayerSourceTypeEnum     `json:"sourceType,omitempty"`
	Style              *AnnotationLayerStyleEnum          `json:"style,omitempty"`
	TimeColumn         *string                            `json:"timeColumn,omitempty"`
	TitleColumn        *string                            `json:"titleColumn,omitempty"`
	Value              interface{}                        `json:"value"`
	Width              *float32                           `json:"width,omitempty"`
}
