package shared

type TemplateDefinitionNewLayoutFormatEnum string

const (
	TemplateDefinitionNewLayoutFormatEnumA4     TemplateDefinitionNewLayoutFormatEnum = "A4"
	TemplateDefinitionNewLayoutFormatEnumLetter TemplateDefinitionNewLayoutFormatEnum = "letter"
	TemplateDefinitionNewLayoutFormatEnumCustom TemplateDefinitionNewLayoutFormatEnum = "custom"
)

type TemplateDefinitionNewLayoutMargins struct {
	Bottom *float64 `json:"bottom"`
	Left   *float64 `json:"left"`
	Right  *float64 `json:"right"`
	Top    *float64 `json:"top"`
}

type TemplateDefinitionNewLayoutOrientationEnum string

const (
	TemplateDefinitionNewLayoutOrientationEnumPortrait  TemplateDefinitionNewLayoutOrientationEnum = "portrait"
	TemplateDefinitionNewLayoutOrientationEnumLandscape TemplateDefinitionNewLayoutOrientationEnum = "landscape"
)

type TemplateDefinitionNewLayoutRepeatLayoutFormatEnum string

const (
	TemplateDefinitionNewLayoutRepeatLayoutFormatEnumA4     TemplateDefinitionNewLayoutRepeatLayoutFormatEnum = "A4"
	TemplateDefinitionNewLayoutRepeatLayoutFormatEnumLetter TemplateDefinitionNewLayoutRepeatLayoutFormatEnum = "letter"
	TemplateDefinitionNewLayoutRepeatLayoutFormatEnumCustom TemplateDefinitionNewLayoutRepeatLayoutFormatEnum = "custom"
)

type TemplateDefinitionNewLayoutRepeatLayout struct {
	Format *TemplateDefinitionNewLayoutRepeatLayoutFormatEnum `json:"format"`
	Height *float64                                           `json:"height"`
	Width  *float64                                           `json:"width"`
}

type TemplateDefinitionNewLayoutUnitEnum string

const (
	TemplateDefinitionNewLayoutUnitEnumCm TemplateDefinitionNewLayoutUnitEnum = "cm"
	TemplateDefinitionNewLayoutUnitEnumIn TemplateDefinitionNewLayoutUnitEnum = "in"
)

type TemplateDefinitionNewLayout struct {
	EmptyLabels  *int64                                      `json:"emptyLabels"`
	Format       *TemplateDefinitionNewLayoutFormatEnum      `json:"format"`
	Height       *float64                                    `json:"height"`
	Margins      *TemplateDefinitionNewLayoutMargins         `json:"margins"`
	Orientation  *TemplateDefinitionNewLayoutOrientationEnum `json:"orientation"`
	RepeatLayout *TemplateDefinitionNewLayoutRepeatLayout    `json:"repeatLayout"`
	Rotaion      *int64                                      `json:"rotaion"`
	Unit         *TemplateDefinitionNewLayoutUnitEnum        `json:"unit"`
	Width        *float64                                    `json:"width"`
}

type TemplateDefinitionNewPagesMargins struct {
	Bottom *float64 `json:"bottom"`
	Right  *float64 `json:"right"`
}

type TemplateDefinitionNewPages struct {
	Components []Component                        `json:"components"`
	Height     *float64                           `json:"height"`
	Margins    *TemplateDefinitionNewPagesMargins `json:"margins"`
	Width      *float64                           `json:"width"`
}

type TemplateDefinitionNew struct {
	IsDraft *bool                        `json:"isDraft"`
	Layout  *TemplateDefinitionNewLayout `json:"layout"`
	Name    string                       `json:"name"`
	Pages   []TemplateDefinitionNewPages `json:"pages"`
	Tags    []string                     `json:"tags"`
}
