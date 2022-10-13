package shared

type OAuth2PermissionGrantListResult struct {
	OdataNextLink *string       `json:"odata.nextLink"`
	Value         []interface{} `json:"value"`
}
