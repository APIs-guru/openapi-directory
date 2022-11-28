from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UsersGetPathParams:
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    upn_or_object_id: str = field(metadata={'path_param': { 'field_name': 'upnOrObjectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersGetQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class UsersGetRequest:
    path_params: UsersGetPathParams = field()
    query_params: UsersGetQueryParams = field()
    

@dataclass
class UsersGetResponse:
    content_type: str = field()
    status_code: int = field()
    graph_error: Optional[shared.GraphError] = field(default=None)
    user: Optional[dict[str, dict[str, Any]]] = field(default=None)
    
