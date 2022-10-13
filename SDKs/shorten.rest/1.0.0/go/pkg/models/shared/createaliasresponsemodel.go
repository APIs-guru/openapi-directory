package shared

type CreateAliasResponseModel struct {
	AliasName  *string `json:"aliasName"`
	DomainName *string `json:"domainName"`
	ShortURL   *string `json:"shortUrl"`
}
