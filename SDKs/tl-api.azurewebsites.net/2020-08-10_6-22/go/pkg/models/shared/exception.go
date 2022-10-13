package shared

type Exception struct {
	InnerException *interface{} `json:"InnerException"`
	Message        *string      `json:"Message"`
	Source         *string      `json:"Source"`
	StackTrace     *string      `json:"StackTrace"`
}
