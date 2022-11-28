package shared

type TemplateDefinitionNewLayoutFormatEnum string

const (
	TemplateDefinitionNewLayoutFormatEnumA4     TemplateDefinitionNewLayoutFormatEnum = "A4"
	TemplateDefinitionNewLayoutFormatEnumLetter TemplateDefinitionNewLayoutFormatEnum = "letter"
	TemplateDefinitionNewLayoutFormatEnumCustom TemplateDefinitionNewLayoutFormatEnum = "custom"
)

// TemplateDefinitionNewLayoutMargins
// Page margins in units
type TemplateDefinitionNewLayoutMargins struct {
	Bottom *float64 `json:"bottom,omitempty"`
	Left   *float64 `json:"left,omitempty"`
	Right  *float64 `json:"right,omitempty"`
	Top    *float64 `json:"top,omitempty"`
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

// TemplateDefinitionNewLayoutRepeatLayout
// Defines page size if layout is repeated on the page e.g sheet labels
type TemplateDefinitionNewLayoutRepeatLayout struct {
	Format *TemplateDefinitionNewLayoutRepeatLayoutFormatEnum `json:"format,omitempty"`
	Height *float64                                           `json:"height,omitempty"`
	Width  *float64                                           `json:"width,omitempty"`
}

type TemplateDefinitionNewLayoutUnitEnum string

const (
	TemplateDefinitionNewLayoutUnitEnumCm TemplateDefinitionNewLayoutUnitEnum = "cm"
	TemplateDefinitionNewLayoutUnitEnumIn TemplateDefinitionNewLayoutUnitEnum = "in"
)

// TemplateDefinitionNewLayout
// Defines template layout (e.g page format, margins).
type TemplateDefinitionNewLayout struct {
	EmptyLabels  *int64                                      `json:"emptyLabels,omitempty"`
	Format       *TemplateDefinitionNewLayoutFormatEnum      `json:"format,omitempty"`
	Height       *float64                                    `json:"height,omitempty"`
	Margins      *TemplateDefinitionNewLayoutMargins         `json:"margins,omitempty"`
	Orientation  *TemplateDefinitionNewLayoutOrientationEnum `json:"orientation,omitempty"`
	RepeatLayout *TemplateDefinitionNewLayoutRepeatLayout    `json:"repeatLayout,omitempty"`
	Rotaion      *int64                                      `json:"rotaion,omitempty"`
	Unit         *TemplateDefinitionNewLayoutUnitEnum        `json:"unit,omitempty"`
	Width        *float64                                    `json:"width,omitempty"`
}

type TemplateDefinitionNewPagesMargins struct {
	Bottom *float64 `json:"bottom,omitempty"`
	Right  *float64 `json:"right,omitempty"`
}

type TemplateDefinitionNewPages struct {
	Components []Component                        `json:"components,omitempty"`
	Height     *float64                           `json:"height,omitempty"`
	Margins    *TemplateDefinitionNewPagesMargins `json:"margins,omitempty"`
	Width      *float64                           `json:"width,omitempty"`
}

// TemplateDefinitionNew
// Template configuration
type TemplateDefinitionNew struct {
	IsDraft *bool                        `json:"isDraft,omitempty"`
	Layout  *TemplateDefinitionNewLayout `json:"layout,omitempty"`
	Name    string                       `json:"name"`
	Pages   []TemplateDefinitionNewPages `json:"pages,omitempty"`
	Tags    []string                     `json:"tags,omitempty"`
}
