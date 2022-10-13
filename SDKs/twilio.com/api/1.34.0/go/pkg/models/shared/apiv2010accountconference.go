package shared

type APIV2010AccountConference struct {
	AccountSid              *string                                  `json:"account_sid"`
	APIVersion              *string                                  `json:"api_version"`
	CallSidEndingConference *string                                  `json:"call_sid_ending_conference"`
	DateCreated             *string                                  `json:"date_created"`
	DateUpdated             *string                                  `json:"date_updated"`
	FriendlyName            *string                                  `json:"friendly_name"`
	ReasonConferenceEnded   *ConferenceEnumReasonConferenceEndedEnum `json:"reason_conference_ended"`
	Region                  *string                                  `json:"region"`
	Sid                     *string                                  `json:"sid"`
	Status                  *ConferenceEnumStatusEnum                `json:"status"`
	SubresourceUris         map[string]interface{}                   `json:"subresource_uris"`
	URI                     *string                                  `json:"uri"`
}
