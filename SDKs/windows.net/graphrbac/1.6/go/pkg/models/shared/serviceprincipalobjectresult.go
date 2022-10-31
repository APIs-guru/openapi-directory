package shared

type ServicePrincipalObjectResult struct {
	OdataMetadata *string `json:"odata.metadata,omitempty"`
	Value         *string `json:"value,omitempty"`
}
