package shared



type APIV2010AccountCall struct {
    AccountSid *string `json:"account_sid,omitempty"`
    AnsweredBy *string `json:"answered_by,omitempty"`
    APIVersion *string `json:"api_version,omitempty"`
    CallerName *string `json:"caller_name,omitempty"`
    DateCreated *string `json:"date_created,omitempty"`
    DateUpdated *string `json:"date_updated,omitempty"`
    Direction *string `json:"direction,omitempty"`
    Duration *string `json:"duration,omitempty"`
    EndTime *string `json:"end_time,omitempty"`
    ForwardedFrom *string `json:"forwarded_from,omitempty"`
    From *string `json:"from,omitempty"`
    FromFormatted *string `json:"from_formatted,omitempty"`
    GroupSid *string `json:"group_sid,omitempty"`
    ParentCallSid *string `json:"parent_call_sid,omitempty"`
    PhoneNumberSid *string `json:"phone_number_sid,omitempty"`
    Price *string `json:"price,omitempty"`
    PriceUnit *string `json:"price_unit,omitempty"`
    QueueTime *string `json:"queue_time,omitempty"`
    Sid *string `json:"sid,omitempty"`
    StartTime *string `json:"start_time,omitempty"`
    Status *CallEnumStatusEnum `json:"status,omitempty"`
    SubresourceUris map[string]interface{} `json:"subresource_uris,omitempty"`
    To *string `json:"to,omitempty"`
    ToFormatted *string `json:"to_formatted,omitempty"`
    TrunkSid *string `json:"trunk_sid,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

