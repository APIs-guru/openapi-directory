package shared

type ComponentClsEnum string

const (
	ComponentClsEnumLabelComponent     ComponentClsEnum = "labelComponent"
	ComponentClsEnumNumberComponent    ComponentClsEnum = "numberComponent"
	ComponentClsEnumTextComponent      ComponentClsEnum = "textComponent"
	ComponentClsEnumImageComponent     ComponentClsEnum = "imageComponent"
	ComponentClsEnumDateComponent      ComponentClsEnum = "dateComponent"
	ComponentClsEnumHlineComponent     ComponentClsEnum = "hlineComponent"
	ComponentClsEnumVlineComponent     ComponentClsEnum = "vlineComponent"
	ComponentClsEnumTableComponent     ComponentClsEnum = "tableComponent"
	ComponentClsEnumCompositeComponent ComponentClsEnum = "compositeComponent"
	ComponentClsEnumBarcodeComponent   ComponentClsEnum = "barcodeComponent"
	ComponentClsEnumQrcodeComponent    ComponentClsEnum = "qrcodeComponent"
	ComponentClsEnumChartComponent     ComponentClsEnum = "chartComponent"
	ComponentClsEnumRectangleComponent ComponentClsEnum = "rectangleComponent"
	ComponentClsEnumHeaderComponent    ComponentClsEnum = "headerComponent"
	ComponentClsEnumFooterComponent    ComponentClsEnum = "footerComponent"
	ComponentClsEnumCheckboxComponent  ComponentClsEnum = "checkboxComponent"
	ComponentClsEnumRadioComponent     ComponentClsEnum = "radioComponent"
)

type Component struct {
	Cls       *ComponentClsEnum `json:"cls,omitempty"`
	DataIndex *string           `json:"dataIndex,omitempty"`
	Height    *float64          `json:"height,omitempty"`
	ID        *string           `json:"id,omitempty"`
	Left      *float64          `json:"left,omitempty"`
	Top       *float64          `json:"top,omitempty"`
	Value     *string           `json:"value,omitempty"`
	Width     *float64          `json:"width,omitempty"`
	Zindex    *int64            `json:"zindex,omitempty"`
}
