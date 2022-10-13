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
	Cls       *ComponentClsEnum `json:"cls"`
	DataIndex *string           `json:"dataIndex"`
	Height    *float64          `json:"height"`
	ID        *string           `json:"id"`
	Left      *float64          `json:"left"`
	Top       *float64          `json:"top"`
	Value     *string           `json:"value"`
	Width     *float64          `json:"width"`
	Zindex    *int64            `json:"zindex"`
}
