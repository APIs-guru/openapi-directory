from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OAuth2PermissionGrantDeletePathParams:
    object_id: str = field(metadata={'path_param': { 'field_name': 'objectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class OAuth2PermissionGrantDeleteQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class OAuth2PermissionGrantDeleteRequest:
    path_params: OAuth2PermissionGrantDeletePathParams = field()
    query_params: OAuth2PermissionGrantDeleteQueryParams = field()
    

@dataclass
class OAuth2PermissionGrantDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    graph_error: Optional[shared.GraphError] = field(default=None)
    
