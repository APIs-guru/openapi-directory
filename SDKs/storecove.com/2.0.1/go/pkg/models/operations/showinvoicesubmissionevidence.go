package operations

type ShowInvoiceSubmissionEvidencePathParams struct {
	GUID string `pathParam:"style=simple,explode=false,name=guid"`
}

type ShowInvoiceSubmissionEvidenceRequest struct {
	PathParams ShowInvoiceSubmissionEvidencePathParams
}

type ShowInvoiceSubmissionEvidenceResponse struct {
	ContentType               string
	InvoiceSubmissionEvidence *interface{}
	StatusCode                int64
}
