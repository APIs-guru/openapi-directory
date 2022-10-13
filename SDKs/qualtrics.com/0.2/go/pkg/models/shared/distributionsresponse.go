package shared

type DistributionsResponseMeta struct {
	HTTPStatus *string `json:"httpStatus"`
	RequestID  *string `json:"requestId"`
}

type DistributionsResponseResultElementsHeaders struct {
	FromEmail    *interface{} `json:"fromEmail"`
	FromName     *interface{} `json:"fromName"`
	ReplyToEmail *interface{} `json:"replyToEmail"`
}

type DistributionsResponseResultElementsMessage struct {
	LibraryID   *interface{} `json:"libraryId"`
	MessageID   *interface{} `json:"messageId"`
	MessageText *interface{} `json:"messageText"`
}

type DistributionsResponseResultElementsRecipients struct {
	ContactID     *interface{} `json:"contactId"`
	LibraryID     *string      `json:"libraryId"`
	MailingListID *string      `json:"mailingListId"`
	SampleID      *interface{} `json:"sampleId"`
}

type DistributionsResponseResultElementsStats struct {
	Blocked    *int64 `json:"blocked"`
	Bounced    *int64 `json:"bounced"`
	Complaints *int64 `json:"complaints"`
	Failed     *int64 `json:"failed"`
	Finished   *int64 `json:"finished"`
	Opened     *int64 `json:"opened"`
	Sent       *int64 `json:"sent"`
	Skipped    *int64 `json:"skipped"`
	Started    *int64 `json:"started"`
}

type DistributionsResponseResultElementsSurveyLink struct {
	ExpirationDate *string `json:"expirationDate"`
	LinkType       *string `json:"linkType"`
	SurveyID       *string `json:"surveyId"`
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
	Elements []DistributionsResponseResultElements `json:"elements"`
	NextPage *interface{}                          `json:"nextPage"`
}

type DistributionsResponse struct {
	Meta   *DistributionsResponseMeta   `json:"meta"`
	Result *DistributionsResponseResult `json:"result"`
}
