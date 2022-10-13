from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetClusterPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetClusterQueryParams:
    time: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclass
class GetClusterSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetClusterRequest:
    path_params: GetClusterPathParams = field(default=None)
    query_params: GetClusterQueryParams = field(default=None)
    security: GetClusterSecurity = field(default=None)
    

@dataclass
class GetClusterResponse:
    api_error: Optional[shared.APIError] = field(default=None)
    cluster: Optional[shared.Cluster] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
