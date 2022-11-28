from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ApplicationsListPathParams:
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ApplicationsListQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    dollar_filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': '$filter', 'style': 'form', 'explode': True }})
    

@dataclass
class ApplicationsListRequest:
    path_params: ApplicationsListPathParams = field()
    query_params: ApplicationsListQueryParams = field()
    

@dataclass
class ApplicationsListResponse:
    content_type: str = field()
    status_code: int = field()
    application_list_result: Optional[shared.ApplicationListResult] = field(default=None)
    graph_error: Optional[shared.GraphError] = field(default=None)
    
