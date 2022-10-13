package shared

type OneGetResponses200ContentApplication1jsonSchemaStatusEnum string

const (
	OneGetResponses200ContentApplication1jsonSchemaStatusEnumOk OneGetResponses200ContentApplication1jsonSchemaStatusEnum = "OK"
)

type OneGetResponses200ContentApplication1jsonSchema struct {
	Status *OneGetResponses200ContentApplication1jsonSchemaStatusEnum `json:"status"`
}
