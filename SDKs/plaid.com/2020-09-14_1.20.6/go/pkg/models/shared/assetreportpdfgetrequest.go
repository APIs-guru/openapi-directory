package shared

// AssetReportPdfGetRequest
// AssetReportPDFGetRequest defines the request schema for `/asset_report/pdf/get`
type AssetReportPdfGetRequest struct {
	AssetReportToken string  `json:"asset_report_token"`
	ClientID         *string `json:"client_id,omitempty"`
	Secret           *string `json:"secret,omitempty"`
}
