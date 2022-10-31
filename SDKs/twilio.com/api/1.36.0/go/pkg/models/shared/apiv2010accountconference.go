package shared

type APIV2010AccountConference struct {
	AccountSid              *string                                  `json:"account_sid,omitempty"`
	APIVersion              *string                                  `json:"api_version,omitempty"`
	CallSidEndingConference *string                                  `json:"call_sid_ending_conference,omitempty"`
	DateCreated             *string                                  `json:"date_created,omitempty"`
	DateUpdated             *string                                  `json:"date_updated,omitempty"`
	FriendlyName            *string                                  `json:"friendly_name,omitempty"`
	ReasonConferenceEnded   *ConferenceEnumReasonConferenceEndedEnum `json:"reason_conference_ended,omitempty"`
	Region                  *string                                  `json:"region,omitempty"`
	Sid                     *string                                  `json:"sid,omitempty"`
	Status                  *ConferenceEnumStatusEnum                `json:"status,omitempty"`
	SubresourceUris         map[string]interface{}                   `json:"subresource_uris,omitempty"`
	URI                     *string                                  `json:"uri,omitempty"`
}
