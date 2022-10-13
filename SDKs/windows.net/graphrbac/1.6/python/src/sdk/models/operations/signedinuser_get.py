from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SignedInUserGetPathParams:
    tenant_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class SignedInUserGetQueryParams:
    api_version: str = field(default=None, metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class SignedInUserGetRequest:
    path_params: SignedInUserGetPathParams = field(default=None)
    query_params: SignedInUserGetQueryParams = field(default=None)
    

@dataclass
class SignedInUserGetResponse:
    content_type: str = field(default=None)
    graph_error: Optional[shared.GraphError] = field(default=None)
    status_code: int = field(default=None)
    user: Optional[dict[str, dict[str, Any]]] = field(default=None)
    
