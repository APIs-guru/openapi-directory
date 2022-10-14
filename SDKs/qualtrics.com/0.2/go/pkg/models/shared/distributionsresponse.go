package shared

type DistributionsResponseMeta struct {
	HTTPStatus *string `json:"httpStatus,omitempty"`
	RequestID  *string `json:"requestId,omitempty"`
}

type DistributionsResponseResultElementsHeaders struct {
	FromEmail    *interface{} `json:"fromEmail,omitempty"`
	FromName     *interface{} `json:"fromName,omitempty"`
	ReplyToEmail *interface{} `json:"replyToEmail,omitempty"`
}

type DistributionsResponseResultElementsMessage struct {
	LibraryID   *interface{} `json:"libraryId,omitempty"`
	MessageID   *interface{} `json:"messageId,omitempty"`
	MessageText *interface{} `json:"messageText,omitempty"`
}

type DistributionsResponseResultElementsRecipients struct {
	ContactID     *interface{} `json:"contactId,omitempty"`
	LibraryID     *string      `json:"libraryId,omitempty"`
	MailingListID *string      `json:"mailingListId,omitempty"`
	SampleID      *interface{} `json:"sampleId,omitempty"`
}

type DistributionsResponseResultElementsStats struct {
	Blocked    *int64 `json:"blocked,omitempty"`
	Bounced    *int64 `json:"bounced,omitempty"`
	Complaints *int64 `json:"complaints,omitempty"`
	Failed     *int64 `json:"failed,omitempty"`
	Finished   *int64 `json:"finished,omitempty"`
	Opened     *int64 `json:"opened,omitempty"`
	Sent       *int64 `json:"sent,omitempty"`
	Skipped    *int64 `json:"skipped,omitempty"`
	Started    *int64 `json:"started,omitempty"`
}

type DistributionsResponseResultElementsSurveyLink struct {
	ExpirationDate *string `json:"expirationDate,omitempty"`
	LinkType       *string `json:"linkType,omitempty"`
	SurveyID       *string `json:"surveyId,omitempty"`
}

type DistributionsResponseResultElements struct {
	CreatedDate          string                                        `json:"createdDate"`
	CustomHeaders        map[string]interface{}                        `json:"customHeaders"`
	EmbeddedData         interface{}                                   `json:"embeddedData"`
	Headers              DistributionsResponseResultElementsHeaders    `json:"headers"`
	ID                   string                                        `json:"id"`
	Message              DistributionsResponseResultElementsMessage    `json:"message"`
	ModifiedDate         string                                        `json:"modifiedDate"`
	OrganizationID       string                                        `json:"organizationId"`
	OwnerID              string                                        `json:"ownerId"`
	ParentDistributionID interface{}                                   `json:"parentDistributionId"`
	Recipients           DistributionsResponseResultElementsRecipients `json:"recipients"`
	RequestStatus        string                                        `json:"requestStatus"`
	RequestType          string                                        `json:"requestType"`
	SendDate             string                                        `json:"sendDate"`
	Stats                DistributionsResponseResultElementsStats      `json:"stats"`
	SurveyLink           DistributionsResponseResultElementsSurveyLink `json:"surveyLink"`
}

type DistributionsResponseResult struct {
	Elements []DistributionsResponseResultElements `json:"elements,omitempty"`
	NextPage *interface{}                          `json:"nextPage,omitempty"`
}

type DistributionsResponse struct {
	Meta   *DistributionsResponseMeta   `json:"meta,omitempty"`
	Result *DistributionsResponseResult `json:"result,omitempty"`
}
