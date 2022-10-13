from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class OAuth2PermissionGrantCreatePathParams:
    tenant_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class OAuth2PermissionGrantCreateQueryParams:
    api_version: str = field(default=None, metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class OAuth2PermissionGrantCreateRequest:
    path_params: OAuth2PermissionGrantCreatePathParams = field(default=None)
    query_params: OAuth2PermissionGrantCreateQueryParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class OAuth2PermissionGrantCreateResponse:
    content_type: str = field(default=None)
    o_auth2_permission_grant: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
