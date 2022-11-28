package shared

type TwitterHandleEnum string

const (
	TwitterHandleEnumAtATwitterHandle TwitterHandleEnum = "@a Twitter handle"
)

// Twitter
// Twitter data
type Twitter struct {
	Handle   *TwitterHandleEnum `json:"handle,omitempty"`
	Hashtags []string           `json:"hashtags,omitempty"`
}
