package shared

// TemplateDefinitionDataSettings
// Defines filter and sort option for root data set.
type TemplateDefinitionDataSettings struct {
	FilterBy []map[string]interface{} `json:"filterBy,omitempty"`
	SortBy   []map[string]interface{} `json:"sortBy,omitempty"`
}

// TemplateDefinitionEditor
// Configuration preferences for the editor
type TemplateDefinitionEditor struct {
	HeightMultiplier *float64 `json:"heightMultiplier,omitempty"`
}

type TemplateDefinitionLayoutFormatEnum string

const (
	TemplateDefinitionLayoutFormatEnumA4     TemplateDefinitionLayoutFormatEnum = "A4"
	TemplateDefinitionLayoutFormatEnumLetter TemplateDefinitionLayoutFormatEnum = "letter"
	TemplateDefinitionLayoutFormatEnumCustom TemplateDefinitionLayoutFormatEnum = "custom"
)

// TemplateDefinitionLayoutMargins
// Page margins in units
type TemplateDefinitionLayoutMargins struct {
	Bottom *float64 `json:"bottom,omitempty"`
	Left   *float64 `json:"left,omitempty"`
	Right  *float64 `json:"right,omitempty"`
	Top    *float64 `json:"top,omitempty"`
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

// TemplateDefinitionLayoutRepeatLayout
// Defines page size if layout is repeated on the page e.g sheet labels
type TemplateDefinitionLayoutRepeatLayout struct {
	Format *TemplateDefinitionLayoutRepeatLayoutFormatEnum `json:"format,omitempty"`
	Height *float64                                        `json:"height,omitempty"`
	Width  *float64                                        `json:"width,omitempty"`
}

type TemplateDefinitionLayoutUnitEnum string

const (
	TemplateDefinitionLayoutUnitEnumCm TemplateDefinitionLayoutUnitEnum = "cm"
	TemplateDefinitionLayoutUnitEnumIn TemplateDefinitionLayoutUnitEnum = "in"
)

// TemplateDefinitionLayout
// Defines template layout (e.g page format, margins).
type TemplateDefinitionLayout struct {
	EmptyLabels  *int64                                   `json:"emptyLabels,omitempty"`
	Format       *TemplateDefinitionLayoutFormatEnum      `json:"format,omitempty"`
	Height       *float64                                 `json:"height,omitempty"`
	Margins      *TemplateDefinitionLayoutMargins         `json:"margins,omitempty"`
	Orientation  *TemplateDefinitionLayoutOrientationEnum `json:"orientation,omitempty"`
	RepeatLayout *TemplateDefinitionLayoutRepeatLayout    `json:"repeatLayout,omitempty"`
	Rotation     *int64                                   `json:"rotation,omitempty"`
	Unit         *TemplateDefinitionLayoutUnitEnum        `json:"unit,omitempty"`
	Width        *float64                                 `json:"width,omitempty"`
}

type TemplateDefinitionPagesMargins struct {
	Bottom *float64 `json:"bottom,omitempty"`
	Right  *float64 `json:"right,omitempty"`
}

type TemplateDefinitionPages struct {
	Components []Component                     `json:"components,omitempty"`
	Height     *float64                        `json:"height,omitempty"`
	Margins    *TemplateDefinitionPagesMargins `json:"margins,omitempty"`
	Width      *float64                        `json:"width,omitempty"`
}

type TemplateDefinition struct {
	DataSettings *TemplateDefinitionDataSettings `json:"dataSettings,omitempty"`
	Editor       *TemplateDefinitionEditor       `json:"editor,omitempty"`
	ID           *int64                          `json:"id,omitempty"`
	IsDraft      *bool                           `json:"isDraft,omitempty"`
	Layout       *TemplateDefinitionLayout       `json:"layout,omitempty"`
	Name         *string                         `json:"name,omitempty"`
	Pages        []TemplateDefinitionPages       `json:"pages,omitempty"`
	Tags         []string                        `json:"tags,omitempty"`
}
