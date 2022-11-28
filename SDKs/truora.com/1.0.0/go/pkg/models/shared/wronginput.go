package shared

type WrongInputInputEnum string

const (
	WrongInputInputEnumDocumentExpeditionDate WrongInputInputEnum = "document_expedition_date"
)

// WrongInput
// Represents a parameter entered during the background check creation that does not match the information obtained
type WrongInput struct {
	Input *WrongInputInputEnum `json:"Input,omitempty"`
}
