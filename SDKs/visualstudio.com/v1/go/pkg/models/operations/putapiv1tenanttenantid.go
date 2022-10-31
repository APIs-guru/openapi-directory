package operations

type PutAPIV1TenantTenantIDPathParams struct {
	TenantID string `pathParam:"style=simple,explode=false,name=tenantId"`
}

type PutAPIV1TenantTenantIDRequest struct {
	PathParams PutAPIV1TenantTenantIDPathParams
}

type PutAPIV1TenantTenantIDResponse struct {
	Body           []byte
	ContentType    string
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
