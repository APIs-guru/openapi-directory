package shared

type GraphError struct {
	OdataError *OdataError `json:"odata.error"`
}
