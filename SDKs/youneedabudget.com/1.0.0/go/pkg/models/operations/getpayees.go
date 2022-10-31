package operations

import (
	"openapi/pkg/models/shared"
)

type GetPayeesPathParams struct {
	BudgetID string `pathParam:"style=simple,explode=false,name=budget_id"`
}

type GetPayeesQueryParams struct {
	LastKnowledgeOfServer *int64 `queryParam:"style=form,explode=true,name=last_knowledge_of_server"`
}

type GetPayeesRequest struct {
	PathParams  GetPayeesPathParams
	QueryParams GetPayeesQueryParams
}

type GetPayeesResponse struct {
	ContentType    string
	ErrorResponse  *shared.ErrorResponse
	PayeesResponse *shared.PayeesResponse
	StatusCode     int64
}
