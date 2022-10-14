package shared

type CreateAliasResponseModel struct {
	AliasName  *string `json:"aliasName,omitempty"`
	DomainName *string `json:"domainName,omitempty"`
	ShortURL   *string `json:"shortUrl,omitempty"`
}
