from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UsersDeletePathParams:
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    upn_or_object_id: str = field(metadata={'path_param': { 'field_name': 'upnOrObjectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersDeleteQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class UsersDeleteRequest:
    path_params: UsersDeletePathParams = field()
    query_params: UsersDeleteQueryParams = field()
    

@dataclass
class UsersDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    graph_error: Optional[shared.GraphError] = field(default=None)
    
