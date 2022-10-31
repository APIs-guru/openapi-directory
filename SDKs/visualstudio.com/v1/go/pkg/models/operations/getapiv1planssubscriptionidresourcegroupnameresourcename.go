package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIV1PlansSubscriptionIDResourceGroupNameResourceNamePathParams struct {
	ResourceGroupName string `pathParam:"style=simple,explode=false,name=resourceGroupName"`
	ResourceName      string `pathParam:"style=simple,explode=false,name=resourceName"`
	SubscriptionID    string `pathParam:"style=simple,explode=false,name=subscriptionId"`
}

type GetAPIV1PlansSubscriptionIDResourceGroupNameResourceNameRequest struct {
	PathParams GetAPIV1PlansSubscriptionIDResourceGroupNameResourceNamePathParams
}

type GetAPIV1PlansSubscriptionIDResourceGroupNameResourceNameResponse struct {
	Body           []byte
	ContentType    string
	PlanResult     *shared.PlanResult
	ProblemDetails map[string]interface{}
	StatusCode     int64
}
