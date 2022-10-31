package operations

type GetCompanyTimeOffsIDPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetCompanyTimeOffsIDRequest struct {
	PathParams GetCompanyTimeOffsIDPathParams
}

type GetCompanyTimeOffsIDResponse struct {
	AbsencePeriodResponse map[string]interface{}
	ContentType           string
	StatusCode            int64
}
