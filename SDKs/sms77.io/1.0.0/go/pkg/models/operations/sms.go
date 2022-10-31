package operations



type SmsQueryParams struct {
    Debug *float64 `queryParam:"style=form,explode=true,name=debug"`
    Delay *string `queryParam:"style=form,explode=true,name=delay"`
    Details *float64 `queryParam:"style=form,explode=true,name=details"`
    Flash *float64 `queryParam:"style=form,explode=true,name=flash"`
    ForeignID *string `queryParam:"style=form,explode=true,name=foreign_id"`
    From *string `queryParam:"style=form,explode=true,name=from"`
    JSON *float64 `queryParam:"style=form,explode=true,name=json"`
    Label *string `queryParam:"style=form,explode=true,name=label"`
    NoReload *float64 `queryParam:"style=form,explode=true,name=no_reload"`
    PerformanceTracking *float64 `queryParam:"style=form,explode=true,name=performance_tracking"`
    ReturnMsgID *float64 `queryParam:"style=form,explode=true,name=return_msg_id"`
    Text string `queryParam:"style=form,explode=true,name=text"`
    To string `queryParam:"style=form,explode=true,name=to"`
    Udh *string `queryParam:"style=form,explode=true,name=udh"`
    Unicode *float64 `queryParam:"style=form,explode=true,name=unicode"`
    UTF8 *float64 `queryParam:"style=form,explode=true,name=utf8"`
    
}

type SmsRequest struct {
    QueryParams SmsQueryParams 
    
}

type Sms200ApplicationJSONMessages struct {
    Encoding *string `json:"encoding,omitempty"`
    Error *string `json:"error,omitempty"`
    ErrorText *string `json:"error_text,omitempty"`
    ID *string `json:"id,omitempty"`
    Messages []string `json:"messages,omitempty"`
    Parts *int64 `json:"parts,omitempty"`
    Price *int64 `json:"price,omitempty"`
    Recipient *string `json:"recipient,omitempty"`
    Sender *string `json:"sender,omitempty"`
    Success *bool `json:"success,omitempty"`
    Text *string `json:"text,omitempty"`
    
}


type Sms200ApplicationJSONSmsTypeEnum string

const (
    Sms200ApplicationJSONSmsTypeEnumEconomy Sms200ApplicationJSONSmsTypeEnum = "economy"
Sms200ApplicationJSONSmsTypeEnumDirect Sms200ApplicationJSONSmsTypeEnum = "direct"
)


type Sms200ApplicationJSON struct {
    Balance *float32 `json:"balance,omitempty"`
    Debug *string `json:"debug,omitempty"`
    Messages []Sms200ApplicationJSONMessages `json:"messages,omitempty"`
    SmsType *Sms200ApplicationJSONSmsTypeEnum `json:"sms_type,omitempty"`
    Success *string `json:"success,omitempty"`
    TotalPrice *float32 `json:"total_price,omitempty"`
    
}

type SmsResponse struct {
    Body []byte 
    ContentType string 
    Sms200ApplicationJSONObject *Sms200ApplicationJSON 
    StatusCode int64 
    
}

