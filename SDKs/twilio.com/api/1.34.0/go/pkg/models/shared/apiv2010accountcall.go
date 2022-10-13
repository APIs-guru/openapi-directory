package shared

type APIV2010AccountCall struct {
	AccountSid      *string                `json:"account_sid"`
	AnsweredBy      *string                `json:"answered_by"`
	APIVersion      *string                `json:"api_version"`
	CallerName      *string                `json:"caller_name"`
	DateCreated     *string                `json:"date_created"`
	DateUpdated     *string                `json:"date_updated"`
	Direction       *string                `json:"direction"`
	Duration        *string                `json:"duration"`
	EndTime         *string                `json:"end_time"`
	ForwardedFrom   *string                `json:"forwarded_from"`
	From            *string                `json:"from"`
	FromFormatted   *string                `json:"from_formatted"`
	GroupSid        *string                `json:"group_sid"`
	ParentCallSid   *string                `json:"parent_call_sid"`
	PhoneNumberSid  *string                `json:"phone_number_sid"`
	Price           *string                `json:"price"`
	PriceUnit       *string                `json:"price_unit"`
	QueueTime       *string                `json:"queue_time"`
	Sid             *string                `json:"sid"`
	StartTime       *string                `json:"start_time"`
	Status          *CallEnumStatusEnum    `json:"status"`
	SubresourceUris map[string]interface{} `json:"subresource_uris"`
	To              *string                `json:"to"`
	ToFormatted     *string                `json:"to_formatted"`
	TrunkSid        *string                `json:"trunk_sid"`
	URI             *string                `json:"uri"`
}
