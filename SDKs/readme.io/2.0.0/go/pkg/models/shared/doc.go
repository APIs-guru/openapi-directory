package shared

type DocTypeEnum string

const (
	DocTypeEnumBasic DocTypeEnum = "basic"
	DocTypeEnumError DocTypeEnum = "error"
	DocTypeEnumLink  DocTypeEnum = "link"
)

type Doc struct {
	Body      *string      `json:"body"`
	Category  string       `json:"category"`
	Hidden    *bool        `json:"hidden"`
	ParentDoc *string      `json:"parentDoc"`
	Title     string       `json:"title"`
	Type      *DocTypeEnum `json:"type"`
}
