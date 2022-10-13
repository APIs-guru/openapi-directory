package shared

type CreateFundingAccountRequestV2TypeEnum string

const (
	CreateFundingAccountRequestV2TypeEnumFbo           CreateFundingAccountRequestV2TypeEnum = "FBO"
	CreateFundingAccountRequestV2TypeEnumWubsDecoupled CreateFundingAccountRequestV2TypeEnum = "WUBS_DECOUPLED"
)

type CreateFundingAccountRequestV2 struct {
	AccountName   *string                               `json:"accountName"`
	AccountNumber *string                               `json:"accountNumber"`
	Currency      *string                               `json:"currency"`
	Name          string                                `json:"name"`
	PayorID       string                                `json:"payorId"`
	RoutingNumber *string                               `json:"routingNumber"`
	Type          CreateFundingAccountRequestV2TypeEnum `json:"type"`
}
