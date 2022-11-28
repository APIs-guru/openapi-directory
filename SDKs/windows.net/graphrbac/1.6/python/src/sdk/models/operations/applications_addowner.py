from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ApplicationsAddOwnerPathParams:
    application_object_id: str = field(metadata={'path_param': { 'field_name': 'applicationObjectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ApplicationsAddOwnerQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class ApplicationsAddOwnerRequests:
    add_owner_parameters: Optional[dict[str, dict[str, Any]]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    add_owner_parameters1: Optional[dict[str, dict[str, Any]]] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ApplicationsAddOwnerRequest:
    path_params: ApplicationsAddOwnerPathParams = field()
    query_params: ApplicationsAddOwnerQueryParams = field()
    request: ApplicationsAddOwnerRequests = field()
    

@dataclass
class ApplicationsAddOwnerResponse:
    content_type: str = field()
    status_code: int = field()
    graph_error: Optional[shared.GraphError] = field(default=None)
    
