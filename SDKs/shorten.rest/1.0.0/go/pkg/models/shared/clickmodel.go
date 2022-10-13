package shared

type ClickModel struct {
	Alias       *string `json:"alias"`
	AliasID     *string `json:"aliasId"`
	Browser     *string `json:"browser"`
	Country     *string `json:"country"`
	CreatedAt   *int64  `json:"createdAt"`
	Destination *string `json:"destination"`
	Domain      *string `json:"domain"`
	Os          *string `json:"os"`
	Referrer    *string `json:"referrer"`
	UserAgent   *string `json:"userAgent"`
}
