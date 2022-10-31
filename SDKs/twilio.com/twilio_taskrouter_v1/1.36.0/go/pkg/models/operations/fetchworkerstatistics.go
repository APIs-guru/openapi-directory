package operations

import (
"time"
"openapi/pkg/models/shared")
var FetchWorkerStatisticsServers = []string{
	"https://taskrouter.twilio.com",
}

type FetchWorkerStatisticsPathParams struct {
    WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
    
}

type FetchWorkerStatisticsQueryParams struct {
    EndDate *time.Time `queryParam:"style=form,explode=true,name=EndDate"`
    FriendlyName *string `queryParam:"style=form,explode=true,name=FriendlyName"`
    Minutes *int64 `queryParam:"style=form,explode=true,name=Minutes"`
    StartDate *time.Time `queryParam:"style=form,explode=true,name=StartDate"`
    TaskChannel *string `queryParam:"style=form,explode=true,name=TaskChannel"`
    TaskQueueName *string `queryParam:"style=form,explode=true,name=TaskQueueName"`
    TaskQueueSid *string `queryParam:"style=form,explode=true,name=TaskQueueSid"`
    
}

type FetchWorkerStatisticsSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchWorkerStatisticsRequest struct {
    ServerURL *string 
    PathParams FetchWorkerStatisticsPathParams 
    QueryParams FetchWorkerStatisticsQueryParams 
    Security FetchWorkerStatisticsSecurity 
    
}

type FetchWorkerStatisticsResponse struct {
    ContentType string 
    StatusCode int64 
    TaskrouterV1WorkspaceWorkerWorkerStatistics *shared.TaskrouterV1WorkspaceWorkerWorkerStatistics 
    
}

