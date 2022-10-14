package shared

type DocTypeEnum string

const (
	DocTypeEnumBasic DocTypeEnum = "basic"
	DocTypeEnumError DocTypeEnum = "error"
	DocTypeEnumLink  DocTypeEnum = "link"
)

type Doc struct {
	Body      *string      `json:"body,omitempty"`
	Category  string       `json:"category"`
	Hidden    *bool        `json:"hidden,omitempty"`
	ParentDoc *string      `json:"parentDoc,omitempty"`
	Title     string       `json:"title"`
	Type      *DocTypeEnum `json:"type,omitempty"`
}
