package operations




type GetGlobalCompliance200ApplicationJSONActionEnum string

const (
    GetGlobalCompliance200ApplicationJSONActionEnumGetGlobalCompliance GetGlobalCompliance200ApplicationJSONActionEnum = "getGlobalCompliance"
)


type GetGlobalCompliance200ApplicationJSONDataGlobalComplianceComplianceDetails struct {
    Error *float32 `json:"error,omitempty"`
    NoReport *float32 `json:"noReport,omitempty"`
    SuccessAlreadyOk *float32 `json:"successAlreadyOK,omitempty"`
    SuccessNotApplicable *float32 `json:"successNotApplicable,omitempty"`
    SuccessRepaired *float32 `json:"successRepaired,omitempty"`
    UnexpectedMissingComponent *float32 `json:"unexpectedMissingComponent,omitempty"`
    UnexpectedUnknownComponent *float32 `json:"unexpectedUnknownComponent,omitempty"`
    
}

type GetGlobalCompliance200ApplicationJSONDataGlobalCompliance struct {
    Compliance float64 `json:"compliance"`
    ComplianceDetails *GetGlobalCompliance200ApplicationJSONDataGlobalComplianceComplianceDetails `json:"complianceDetails,omitempty"`
    
}

type GetGlobalCompliance200ApplicationJSONData struct {
    GlobalCompliance GetGlobalCompliance200ApplicationJSONDataGlobalCompliance `json:"globalCompliance"`
    
}


type GetGlobalCompliance200ApplicationJSONResultEnum string

const (
    GetGlobalCompliance200ApplicationJSONResultEnumSuccess GetGlobalCompliance200ApplicationJSONResultEnum = "success"
GetGlobalCompliance200ApplicationJSONResultEnumError GetGlobalCompliance200ApplicationJSONResultEnum = "error"
)


type GetGlobalCompliance200ApplicationJSON struct {
    Action GetGlobalCompliance200ApplicationJSONActionEnum `json:"action"`
    Data GetGlobalCompliance200ApplicationJSONData `json:"data"`
    Result GetGlobalCompliance200ApplicationJSONResultEnum `json:"result"`
    
}

type GetGlobalComplianceResponse struct {
    ContentType string 
    StatusCode int64 
    GetGlobalCompliance200ApplicationJSONObject *GetGlobalCompliance200ApplicationJSON 
    
}

