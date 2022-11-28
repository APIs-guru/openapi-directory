from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ApplicationsCreatePathParams:
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ApplicationsCreateQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class ApplicationsCreateRequests:
    application_create_parameters: Optional[shared.ApplicationCreateParameters] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    application_create_parameters1: Optional[shared.ApplicationCreateParameters] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ApplicationsCreateRequest:
    path_params: ApplicationsCreatePathParams = field()
    query_params: ApplicationsCreateQueryParams = field()
    request: ApplicationsCreateRequests = field()
    

@dataclass
class ApplicationsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    application: Optional[dict[str, dict[str, Any]]] = field(default=None)
    graph_error: Optional[shared.GraphError] = field(default=None)
    
