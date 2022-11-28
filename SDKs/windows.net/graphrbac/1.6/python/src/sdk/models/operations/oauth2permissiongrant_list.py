from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OAuth2PermissionGrantListPathParams:
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class OAuth2PermissionGrantListQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    dollar_filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': '$filter', 'style': 'form', 'explode': True }})
    

@dataclass
class OAuth2PermissionGrantListRequest:
    path_params: OAuth2PermissionGrantListPathParams = field()
    query_params: OAuth2PermissionGrantListQueryParams = field()
    

@dataclass
class OAuth2PermissionGrantListResponse:
    content_type: str = field()
    status_code: int = field()
    o_auth2_permission_grant_list_result: Optional[shared.OAuth2PermissionGrantListResult] = field(default=None)
    
