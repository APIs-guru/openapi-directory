package shared




type RegisterRealtimeAPIDataRegistrationTypeEnum string

const (
    RegisterRealtimeAPIDataRegistrationTypeEnumDisabled RegisterRealtimeAPIDataRegistrationTypeEnum = "Disabled"
RegisterRealtimeAPIDataRegistrationTypeEnumSingleMeterRegistration RegisterRealtimeAPIDataRegistrationTypeEnum = "SingleMeterRegistration"
RegisterRealtimeAPIDataRegistrationTypeEnumUserRegistration RegisterRealtimeAPIDataRegistrationTypeEnum = "UserRegistration"
)


type RegisterRealtimeAPIData struct {
    APIURL *string `json:"ApiUrl,omitempty" form:"name=ApiUrl"`
    BasicAuthPassword *string `json:"BasicAuthPassword,omitempty" form:"name=BasicAuthPassword"`
    BasicAuthUsername *string `json:"BasicAuthUsername,omitempty" form:"name=BasicAuthUsername"`
    ID *string `json:"Id,omitempty" form:"name=Id"`
    MeterID *string `json:"MeterId,omitempty" form:"name=MeterId"`
    RegistrationType *RegisterRealtimeAPIDataRegistrationTypeEnum `json:"RegistrationType,omitempty" form:"name=RegistrationType"`
    SerialNumber *string `json:"SerialNumber,omitempty" form:"name=SerialNumber"`
    
}

