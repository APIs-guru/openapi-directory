package shared

type TwitterHandleEnum string

const (
	TwitterHandleEnumAtATwitterHandle TwitterHandleEnum = "@a Twitter handle"
)

type Twitter struct {
	Handle   *TwitterHandleEnum `json:"handle"`
	Hashtags []string           `json:"hashtags"`
}
