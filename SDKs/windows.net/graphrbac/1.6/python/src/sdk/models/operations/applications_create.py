from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ApplicationsCreatePathParams:
    tenant_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ApplicationsCreateQueryParams:
    api_version: str = field(default=None, metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class ApplicationsCreateRequests:
    application_create_parameters: Optional[shared.ApplicationCreateParameters] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    application_create_parameters1: Optional[shared.ApplicationCreateParameters] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ApplicationsCreateRequest:
    path_params: ApplicationsCreatePathParams = field(default=None)
    query_params: ApplicationsCreateQueryParams = field(default=None)
    request: ApplicationsCreateRequests = field(default=None)
    

@dataclass
class ApplicationsCreateResponse:
    application: Optional[dict[str, dict[str, Any]]] = field(default=None)
    content_type: str = field(default=None)
    graph_error: Optional[shared.GraphError] = field(default=None)
    status_code: int = field(default=None)
    
