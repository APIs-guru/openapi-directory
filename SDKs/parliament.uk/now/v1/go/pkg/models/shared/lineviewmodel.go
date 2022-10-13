package shared

type LineViewModelContentTypeEnum string

const (
	LineViewModelContentTypeEnumGeneric          LineViewModelContentTypeEnum = "Generic"
	LineViewModelContentTypeEnumMember           LineViewModelContentTypeEnum = "Member"
	LineViewModelContentTypeEnumOralQuestionTime LineViewModelContentTypeEnum = "OralQuestionTime"
	LineViewModelContentTypeEnumAnsweringBody    LineViewModelContentTypeEnum = "AnsweringBody"
	LineViewModelContentTypeEnumBill             LineViewModelContentTypeEnum = "Bill"
)

type LineViewModelHorizontalAlignmentEnum string

const (
	LineViewModelHorizontalAlignmentEnumLeft   LineViewModelHorizontalAlignmentEnum = "Left"
	LineViewModelHorizontalAlignmentEnumRight  LineViewModelHorizontalAlignmentEnum = "Right"
	LineViewModelHorizontalAlignmentEnumCentre LineViewModelHorizontalAlignmentEnum = "Centre"
)

type LineViewModelStyleEnum string

const (
	LineViewModelStyleEnumDividerSolid        LineViewModelStyleEnum = "DividerSolid"
	LineViewModelStyleEnumEmptyLine           LineViewModelStyleEnum = "EmptyLine"
	LineViewModelStyleEnumMember              LineViewModelStyleEnum = "Member"
	LineViewModelStyleEnumFooter              LineViewModelStyleEnum = "Footer"
	LineViewModelStyleEnumAnsweringBody       LineViewModelStyleEnum = "AnsweringBody"
	LineViewModelStyleEnumWestminsterHallInfo LineViewModelStyleEnum = "WestminsterHallInfo"
	LineViewModelStyleEnumGrandCommitteeInfo  LineViewModelStyleEnum = "GrandCommitteeInfo"
	LineViewModelStyleEnumDividerDotted       LineViewModelStyleEnum = "DividerDotted"
	LineViewModelStyleEnumDividerDashed       LineViewModelStyleEnum = "DividerDashed"
	LineViewModelStyleEnumDivision            LineViewModelStyleEnum = "Division"
	LineViewModelStyleEnumText150             LineViewModelStyleEnum = "Text150"
	LineViewModelStyleEnumText140             LineViewModelStyleEnum = "Text140"
	LineViewModelStyleEnumText130             LineViewModelStyleEnum = "Text130"
	LineViewModelStyleEnumText120             LineViewModelStyleEnum = "Text120"
	LineViewModelStyleEnumText110             LineViewModelStyleEnum = "Text110"
	LineViewModelStyleEnumText100             LineViewModelStyleEnum = "Text100"
	LineViewModelStyleEnumText90              LineViewModelStyleEnum = "Text90"
	LineViewModelStyleEnumText80              LineViewModelStyleEnum = "Text80"
	LineViewModelStyleEnumText70              LineViewModelStyleEnum = "Text70"
)

type LineViewModelVerticalAlignmentEnum string

const (
	LineViewModelVerticalAlignmentEnumTop    LineViewModelVerticalAlignmentEnum = "Top"
	LineViewModelVerticalAlignmentEnumMiddle LineViewModelVerticalAlignmentEnum = "Middle"
	LineViewModelVerticalAlignmentEnumBottom LineViewModelVerticalAlignmentEnum = "Bottom"
)

type LineViewModel struct {
	Content               *string                               `json:"content"`
	ContentAdditionalJSON *string                               `json:"contentAdditionalJson"`
	ContentType           *LineViewModelContentTypeEnum         `json:"contentType"`
	ContentURL            *string                               `json:"contentUrl"`
	DisplayOrder          *int32                                `json:"displayOrder"`
	ForceCapitalisation   *bool                                 `json:"forceCapitalisation"`
	HorizontalAlignment   *LineViewModelHorizontalAlignmentEnum `json:"horizontalAlignment"`
	Member                *MemberViewModel                      `json:"member"`
	Style                 *LineViewModelStyleEnum               `json:"style"`
	VerticalAlignment     *LineViewModelVerticalAlignmentEnum   `json:"verticalAlignment"`
}
