from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeletedApplicationsListPathParams:
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletedApplicationsListQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    dollar_filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': '$filter', 'style': 'form', 'explode': True }})
    

@dataclass
class DeletedApplicationsListRequest:
    path_params: DeletedApplicationsListPathParams = field()
    query_params: DeletedApplicationsListQueryParams = field()
    

@dataclass
class DeletedApplicationsListResponse:
    content_type: str = field()
    status_code: int = field()
    application_list_result: Optional[shared.ApplicationListResult] = field(default=None)
    graph_error: Optional[shared.GraphError] = field(default=None)
    
