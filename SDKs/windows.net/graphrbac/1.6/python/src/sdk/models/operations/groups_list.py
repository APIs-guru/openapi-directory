from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GroupsListPathParams:
    tenant_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupsListQueryParams:
    dollar_filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': '$filter', 'style': 'form', 'explode': True }})
    api_version: str = field(default=None, metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class GroupsListRequest:
    path_params: GroupsListPathParams = field(default=None)
    query_params: GroupsListQueryParams = field(default=None)
    

@dataclass
class GroupsListResponse:
    content_type: str = field(default=None)
    graph_error: Optional[shared.GraphError] = field(default=None)
    group_list_result: Optional[shared.GroupListResult] = field(default=None)
    status_code: int = field(default=None)
    
