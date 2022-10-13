package shared

type APIV2010AccountMessage struct {
	AccountSid          *string                   `json:"account_sid"`
	APIVersion          *string                   `json:"api_version"`
	Body                *string                   `json:"body"`
	DateCreated         *string                   `json:"date_created"`
	DateSent            *string                   `json:"date_sent"`
	DateUpdated         *string                   `json:"date_updated"`
	Direction           *MessageEnumDirectionEnum `json:"direction"`
	ErrorCode           *int64                    `json:"error_code"`
	ErrorMessage        *string                   `json:"error_message"`
	From                *string                   `json:"from"`
	MessagingServiceSid *string                   `json:"messaging_service_sid"`
	NumMedia            *string                   `json:"num_media"`
	NumSegments         *string                   `json:"num_segments"`
	Price               *string                   `json:"price"`
	PriceUnit           *string                   `json:"price_unit"`
	Sid                 *string                   `json:"sid"`
	Status              *MessageEnumStatusEnum    `json:"status"`
	SubresourceUris     map[string]interface{}    `json:"subresource_uris"`
	To                  *string                   `json:"to"`
	URI                 *string                   `json:"uri"`
}
