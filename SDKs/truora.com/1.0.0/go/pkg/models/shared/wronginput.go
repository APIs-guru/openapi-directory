package shared

type WrongInputInputEnum string

const (
	WrongInputInputEnumDocumentExpeditionDate WrongInputInputEnum = "document_expedition_date"
)

type WrongInput struct {
	Input *WrongInputInputEnum `json:"Input,omitempty"`
}
