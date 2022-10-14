package shared

type RetrieveDistributionLinksResponseMeta struct {
	HTTPStatus *string `json:"httpStatus,omitempty"`
	RequestID  *string `json:"requestId,omitempty"`
}

type RetrieveDistributionLinksResponseResultElements struct {
	ContactID                string      `json:"contactId"`
	Email                    string      `json:"email"`
	ExceededContactFrequency bool        `json:"exceededContactFrequency"`
	ExternalDataReference    interface{} `json:"externalDataReference"`
	FirstName                string      `json:"firstName"`
	LastName                 string      `json:"lastName"`
	Link                     string      `json:"link"`
	LinkExpiration           string      `json:"linkExpiration"`
	Status                   string      `json:"status"`
	TransactionID            interface{} `json:"transactionId"`
	Unsubscribed             bool        `json:"unsubscribed"`
}

type RetrieveDistributionLinksResponseResult struct {
	Elements []RetrieveDistributionLinksResponseResultElements `json:"elements,omitempty"`
	NextPage *interface{}                                      `json:"nextPage,omitempty"`
}

type RetrieveDistributionLinksResponse struct {
	Meta   *RetrieveDistributionLinksResponseMeta   `json:"meta,omitempty"`
	Result *RetrieveDistributionLinksResponseResult `json:"result,omitempty"`
}
