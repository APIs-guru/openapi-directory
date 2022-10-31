package operations

import (
"time"
"openapi/pkg/models/shared")
var FetchTaskQueueCumulativeStatisticsServers = []string{
	"https://taskrouter.twilio.com",
}

type FetchTaskQueueCumulativeStatisticsPathParams struct {
    TaskQueueSid string `pathParam:"style=simple,explode=false,name=TaskQueueSid"`
    WorkspaceSid string `pathParam:"style=simple,explode=false,name=WorkspaceSid"`
    
}

type FetchTaskQueueCumulativeStatisticsQueryParams struct {
    EndDate *time.Time `queryParam:"style=form,explode=true,name=EndDate"`
    Minutes *int64 `queryParam:"style=form,explode=true,name=Minutes"`
    SplitByWaitTime *string `queryParam:"style=form,explode=true,name=SplitByWaitTime"`
    StartDate *time.Time `queryParam:"style=form,explode=true,name=StartDate"`
    TaskChannel *string `queryParam:"style=form,explode=true,name=TaskChannel"`
    
}

type FetchTaskQueueCumulativeStatisticsSecurity struct {
    AccountSidAuthToken shared.SchemeAccountSidAuthToken `security:"scheme,type=http,subtype=basic"`
    
}

type FetchTaskQueueCumulativeStatisticsRequest struct {
    ServerURL *string 
    PathParams FetchTaskQueueCumulativeStatisticsPathParams 
    QueryParams FetchTaskQueueCumulativeStatisticsQueryParams 
    Security FetchTaskQueueCumulativeStatisticsSecurity 
    
}

type FetchTaskQueueCumulativeStatisticsResponse struct {
    ContentType string 
    StatusCode int64 
    TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics *shared.TaskrouterV1WorkspaceTaskQueueTaskQueueCumulativeStatistics 
    
}

