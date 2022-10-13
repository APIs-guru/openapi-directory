package shared

type ProcessorTokenCreateRequestProcessorEnum string

const (
	ProcessorTokenCreateRequestProcessorEnumAchq           ProcessorTokenCreateRequestProcessorEnum = "achq"
	ProcessorTokenCreateRequestProcessorEnumAlpaca         ProcessorTokenCreateRequestProcessorEnum = "alpaca"
	ProcessorTokenCreateRequestProcessorEnumAstra          ProcessorTokenCreateRequestProcessorEnum = "astra"
	ProcessorTokenCreateRequestProcessorEnumCheck          ProcessorTokenCreateRequestProcessorEnum = "check"
	ProcessorTokenCreateRequestProcessorEnumCheckbook      ProcessorTokenCreateRequestProcessorEnum = "checkbook"
	ProcessorTokenCreateRequestProcessorEnumCircle         ProcessorTokenCreateRequestProcessorEnum = "circle"
	ProcessorTokenCreateRequestProcessorEnumDrivewealth    ProcessorTokenCreateRequestProcessorEnum = "drivewealth"
	ProcessorTokenCreateRequestProcessorEnumDwolla         ProcessorTokenCreateRequestProcessorEnum = "dwolla"
	ProcessorTokenCreateRequestProcessorEnumGalileo        ProcessorTokenCreateRequestProcessorEnum = "galileo"
	ProcessorTokenCreateRequestProcessorEnumLithic         ProcessorTokenCreateRequestProcessorEnum = "lithic"
	ProcessorTokenCreateRequestProcessorEnumModernTreasury ProcessorTokenCreateRequestProcessorEnum = "modern_treasury"
	ProcessorTokenCreateRequestProcessorEnumMoov           ProcessorTokenCreateRequestProcessorEnum = "moov"
	ProcessorTokenCreateRequestProcessorEnumOcrolus        ProcessorTokenCreateRequestProcessorEnum = "ocrolus"
	ProcessorTokenCreateRequestProcessorEnumPrimeTrust     ProcessorTokenCreateRequestProcessorEnum = "prime_trust"
	ProcessorTokenCreateRequestProcessorEnumRize           ProcessorTokenCreateRequestProcessorEnum = "rize"
	ProcessorTokenCreateRequestProcessorEnumSilaMoney      ProcessorTokenCreateRequestProcessorEnum = "sila_money"
	ProcessorTokenCreateRequestProcessorEnumSbvAPI         ProcessorTokenCreateRequestProcessorEnum = "sbv_api"
	ProcessorTokenCreateRequestProcessorEnumUnit           ProcessorTokenCreateRequestProcessorEnum = "unit"
	ProcessorTokenCreateRequestProcessorEnumVesta          ProcessorTokenCreateRequestProcessorEnum = "vesta"
	ProcessorTokenCreateRequestProcessorEnumVopay          ProcessorTokenCreateRequestProcessorEnum = "vopay"
	ProcessorTokenCreateRequestProcessorEnumWyre           ProcessorTokenCreateRequestProcessorEnum = "wyre"
)

type ProcessorTokenCreateRequest struct {
	AccessToken string                                   `json:"access_token"`
	AccountID   string                                   `json:"account_id"`
	ClientID    *string                                  `json:"client_id"`
	Processor   ProcessorTokenCreateRequestProcessorEnum `json:"processor"`
	Secret      *string                                  `json:"secret"`
}
