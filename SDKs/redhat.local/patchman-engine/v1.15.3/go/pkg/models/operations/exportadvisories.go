package operations

import (
"openapi/pkg/models/shared")

type ExportAdvisoriesQueryParams struct {
    FilterAdvisoryType *string `queryParam:"style=form,explode=true,name=filter[advisory_type]"`
    FilterApplicableSystems *string `queryParam:"style=form,explode=true,name=filter[applicable_systems]"`
    FilterDescription *string `queryParam:"style=form,explode=true,name=filter[description]"`
    FilterID *string `queryParam:"style=form,explode=true,name=filter[id]"`
    FilterPublicDate *string `queryParam:"style=form,explode=true,name=filter[public_date]"`
    FilterSeverity *string `queryParam:"style=form,explode=true,name=filter[severity]"`
    FilterSynopsis *string `queryParam:"style=form,explode=true,name=filter[synopsis]"`
    Search *string `queryParam:"style=form,explode=true,name=search"`
    
}

type ExportAdvisoriesSecurity struct {
    RhIdentity shared.SchemeRhIdentity `security:"scheme,type=apiKey,subtype=header"`
    
}

type ExportAdvisoriesRequest struct {
    QueryParams ExportAdvisoriesQueryParams 
    Security ExportAdvisoriesSecurity 
    
}

type ExportAdvisoriesResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    ControllersAdvisoryInlineItems []shared.ControllersAdvisoryInlineItem 
    
}

