package shared



type APIV2010AccountMessage struct {
    AccountSid *string `json:"account_sid,omitempty"`
    APIVersion *string `json:"api_version,omitempty"`
    Body *string `json:"body,omitempty"`
    DateCreated *string `json:"date_created,omitempty"`
    DateSent *string `json:"date_sent,omitempty"`
    DateUpdated *string `json:"date_updated,omitempty"`
    Direction *MessageEnumDirectionEnum `json:"direction,omitempty"`
    ErrorCode *int64 `json:"error_code,omitempty"`
    ErrorMessage *string `json:"error_message,omitempty"`
    From *string `json:"from,omitempty"`
    MessagingServiceSid *string `json:"messaging_service_sid,omitempty"`
    NumMedia *string `json:"num_media,omitempty"`
    NumSegments *string `json:"num_segments,omitempty"`
    Price *string `json:"price,omitempty"`
    PriceUnit *string `json:"price_unit,omitempty"`
    Sid *string `json:"sid,omitempty"`
    Status *MessageEnumStatusEnum `json:"status,omitempty"`
    SubresourceUris map[string]interface{} `json:"subresource_uris,omitempty"`
    To *string `json:"to,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

