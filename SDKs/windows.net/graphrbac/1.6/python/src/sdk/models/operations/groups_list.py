from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GroupsListPathParams:
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupsListQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    dollar_filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': '$filter', 'style': 'form', 'explode': True }})
    

@dataclass
class GroupsListRequest:
    path_params: GroupsListPathParams = field()
    query_params: GroupsListQueryParams = field()
    

@dataclass
class GroupsListResponse:
    content_type: str = field()
    status_code: int = field()
    graph_error: Optional[shared.GraphError] = field(default=None)
    group_list_result: Optional[shared.GroupListResult] = field(default=None)
    
