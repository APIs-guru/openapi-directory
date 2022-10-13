package shared

type AlertAttachment struct {
	Content     *string `json:"content"`
	ContentType *string `json:"contentType"`
	Encoding    *int32  `json:"encoding"`
	ID          *string `json:"id"`
	Name        *string `json:"name"`
}
