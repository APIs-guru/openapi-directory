package operations

import (
"openapi/pkg/models/shared")
var FetchTaskQueueRealTimeStatisticsServers = []string{
	"https://taskrouter.twilio.com",
}

type FetchTaskQueueRealTimeStatisticsPathParams struct {
    TaskQueueSid string `pathParam:"style=simple,explode=false,name=TaskQueueSid"`
    WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
    
}

type FetchTaskQueueRealTimeStatisticsQueryParams struct {
    TaskChannel *string `queryParam:"style=form,explode=true,name=TaskChannel"`
    
}

type FetchTaskQueueRealTimeStatisticsSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchTaskQueueRealTimeStatisticsRequest struct {
    ServerURL *string 
    PathParams FetchTaskQueueRealTimeStatisticsPathParams 
    QueryParams FetchTaskQueueRealTimeStatisticsQueryParams 
    Security FetchTaskQueueRealTimeStatisticsSecurity 
    
}

type FetchTaskQueueRealTimeStatisticsResponse struct {
    ContentType string 
    StatusCode int64 
    TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics *shared.TaskrouterV1WorkspaceTaskQueueTaskQueueRealTimeStatistics 
    
}

