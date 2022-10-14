package shared

type Exception struct {
	InnerException *interface{} `json:"InnerException,omitempty"`
	Message        *string      `json:"Message,omitempty"`
	Source         *string      `json:"Source,omitempty"`
	StackTrace     *string      `json:"StackTrace,omitempty"`
}
