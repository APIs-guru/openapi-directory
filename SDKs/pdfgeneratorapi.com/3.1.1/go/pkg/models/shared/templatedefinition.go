package shared

type TemplateDefinitionDataSettings struct {
	FilterBy []map[string]interface{} `json:"filterBy"`
	SortBy   []map[string]interface{} `json:"sortBy"`
}

type TemplateDefinitionEditor struct {
	HeightMultiplier *float64 `json:"heightMultiplier"`
}

type TemplateDefinitionLayoutFormatEnum string

const (
	TemplateDefinitionLayoutFormatEnumA4     TemplateDefinitionLayoutFormatEnum = "A4"
	TemplateDefinitionLayoutFormatEnumLetter TemplateDefinitionLayoutFormatEnum = "letter"
	TemplateDefinitionLayoutFormatEnumCustom TemplateDefinitionLayoutFormatEnum = "custom"
)

type TemplateDefinitionLayoutMargins struct {
	Bottom *float64 `json:"bottom"`
	Left   *float64 `json:"left"`
	Right  *float64 `json:"right"`
	Top    *float64 `json:"top"`
}

type TemplateDefinitionLayoutOrientationEnum string

const (
	TemplateDefinitionLayoutOrientationEnumPortrait  TemplateDefinitionLayoutOrientationEnum = "portrait"
	TemplateDefinitionLayoutOrientationEnumLandscape TemplateDefinitionLayoutOrientationEnum = "landscape"
)

type TemplateDefinitionLayoutRepeatLayoutFormatEnum string

const (
	TemplateDefinitionLayoutRepeatLayoutFormatEnumA4     TemplateDefinitionLayoutRepeatLayoutFormatEnum = "A4"
	TemplateDefinitionLayoutRepeatLayoutFormatEnumLetter TemplateDefinitionLayoutRepeatLayoutFormatEnum = "letter"
	TemplateDefinitionLayoutRepeatLayoutFormatEnumCustom TemplateDefinitionLayoutRepeatLayoutFormatEnum = "custom"
)

type TemplateDefinitionLayoutRepeatLayout struct {
	Format *TemplateDefinitionLayoutRepeatLayoutFormatEnum `json:"format"`
	Height *float64                                        `json:"height"`
	Width  *float64                                        `json:"width"`
}

type TemplateDefinitionLayoutUnitEnum string

const (
	TemplateDefinitionLayoutUnitEnumCm TemplateDefinitionLayoutUnitEnum = "cm"
	TemplateDefinitionLayoutUnitEnumIn TemplateDefinitionLayoutUnitEnum = "in"
)

type TemplateDefinitionLayout struct {
	EmptyLabels  *int64                                   `json:"emptyLabels"`
	Format       *TemplateDefinitionLayoutFormatEnum      `json:"format"`
	Height       *float64                                 `json:"height"`
	Margins      *TemplateDefinitionLayoutMargins         `json:"margins"`
	Orientation  *TemplateDefinitionLayoutOrientationEnum `json:"orientation"`
	RepeatLayout *TemplateDefinitionLayoutRepeatLayout    `json:"repeatLayout"`
	Rotation     *int64                                   `json:"rotation"`
	Unit         *TemplateDefinitionLayoutUnitEnum        `json:"unit"`
	Width        *float64                                 `json:"width"`
}

type TemplateDefinitionPagesMargins struct {
	Bottom *float64 `json:"bottom"`
	Right  *float64 `json:"right"`
}

type TemplateDefinitionPages struct {
	Components []Component                     `json:"components"`
	Height     *float64                        `json:"height"`
	Margins    *TemplateDefinitionPagesMargins `json:"margins"`
	Width      *float64                        `json:"width"`
}

type TemplateDefinition struct {
	DataSettings *TemplateDefinitionDataSettings `json:"dataSettings"`
	Editor       *TemplateDefinitionEditor       `json:"editor"`
	ID           *int64                          `json:"id"`
	IsDraft      *bool                           `json:"isDraft"`
	Layout       *TemplateDefinitionLayout       `json:"layout"`
	Name         *string                         `json:"name"`
	Pages        []TemplateDefinitionPages       `json:"pages"`
	Tags         []string                        `json:"tags"`
}
