from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ApplicationsPatchPathParams:
    application_object_id: str = field(default=None, metadata={'path_param': { 'field_name': 'applicationObjectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ApplicationsPatchQueryParams:
    api_version: str = field(default=None, metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class ApplicationsPatchRequests:
    application_update_parameters: Optional[shared.ApplicationUpdateParameters] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    application_update_parameters1: Optional[shared.ApplicationUpdateParameters] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ApplicationsPatchRequest:
    path_params: ApplicationsPatchPathParams = field(default=None)
    query_params: ApplicationsPatchQueryParams = field(default=None)
    request: ApplicationsPatchRequests = field(default=None)
    

@dataclass
class ApplicationsPatchResponse:
    content_type: str = field(default=None)
    graph_error: Optional[shared.GraphError] = field(default=None)
    status_code: int = field(default=None)
    
