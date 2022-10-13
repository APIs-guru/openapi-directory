package shared

type SeldonMessage struct {
	BinData *string      `json:"binData"`
	Data    *DefaultData `json:"data"`
	Meta    *Meta        `json:"meta"`
	Status  *Status      `json:"status"`
	StrData *string      `json:"strData"`
}
