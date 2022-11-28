package shared

// GraphError
// Active Directory error information.
type GraphError struct {
	OdataError *OdataError `json:"odata.error,omitempty"`
}
