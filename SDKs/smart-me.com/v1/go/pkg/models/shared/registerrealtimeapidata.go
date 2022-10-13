package shared

type RegisterRealtimeAPIDataRegistrationTypeEnum string

const (
	RegisterRealtimeAPIDataRegistrationTypeEnumDisabled                RegisterRealtimeAPIDataRegistrationTypeEnum = "Disabled"
	RegisterRealtimeAPIDataRegistrationTypeEnumSingleMeterRegistration RegisterRealtimeAPIDataRegistrationTypeEnum = "SingleMeterRegistration"
	RegisterRealtimeAPIDataRegistrationTypeEnumUserRegistration        RegisterRealtimeAPIDataRegistrationTypeEnum = "UserRegistration"
)

type RegisterRealtimeAPIData struct {
	APIURL            *string                                      `json:"ApiUrl" form:"name=ApiUrl"`
	BasicAuthPassword *string                                      `json:"BasicAuthPassword" form:"name=BasicAuthPassword"`
	BasicAuthUsername *string                                      `json:"BasicAuthUsername" form:"name=BasicAuthUsername"`
	ID                *string                                      `json:"Id" form:"name=Id"`
	MeterID           *string                                      `json:"MeterId" form:"name=MeterId"`
	RegistrationType  *RegisterRealtimeAPIDataRegistrationTypeEnum `json:"RegistrationType" form:"name=RegistrationType"`
	SerialNumber      *string                                      `json:"SerialNumber" form:"name=SerialNumber"`
}
