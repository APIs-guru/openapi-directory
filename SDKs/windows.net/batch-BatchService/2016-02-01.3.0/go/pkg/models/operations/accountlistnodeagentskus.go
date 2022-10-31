package operations



type AccountListNodeAgentSkusQueryParams struct {
    DollarFilter *string `queryParam:"style=form,explode=true,name=$filter"`
    APIVersion string `queryParam:"style=form,explode=true,name=api-version"`
    Maxresults *int32 `queryParam:"style=form,explode=true,name=maxresults"`
    Timeout *int32 `queryParam:"style=form,explode=true,name=timeout"`
    
}

type AccountListNodeAgentSkusHeaders struct {
    ClientRequestID *string `header:"style=simple,explode=false,name=client-request-id"`
    OcpDate *string `header:"style=simple,explode=false,name=ocp-date"`
    ReturnClientRequestID *bool `header:"style=simple,explode=false,name=return-client-request-id"`
    
}

type AccountListNodeAgentSkusRequest struct {
    QueryParams AccountListNodeAgentSkusQueryParams 
    Headers AccountListNodeAgentSkusHeaders 
    
}

type AccountListNodeAgentSkusResponse struct {
    AccountListNodeAgentSkusResult *interface{} 
    BatchError *interface{} 
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    
}

