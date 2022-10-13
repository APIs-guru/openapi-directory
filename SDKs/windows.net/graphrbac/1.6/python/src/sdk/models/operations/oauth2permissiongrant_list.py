from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class OAuth2PermissionGrantListPathParams:
    tenant_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class OAuth2PermissionGrantListQueryParams:
    dollar_filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': '$filter', 'style': 'form', 'explode': True }})
    api_version: str = field(default=None, metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class OAuth2PermissionGrantListRequest:
    path_params: OAuth2PermissionGrantListPathParams = field(default=None)
    query_params: OAuth2PermissionGrantListQueryParams = field(default=None)
    

@dataclass
class OAuth2PermissionGrantListResponse:
    content_type: str = field(default=None)
    o_auth2_permission_grant_list_result: Optional[shared.OAuth2PermissionGrantListResult] = field(default=None)
    status_code: int = field(default=None)
    
