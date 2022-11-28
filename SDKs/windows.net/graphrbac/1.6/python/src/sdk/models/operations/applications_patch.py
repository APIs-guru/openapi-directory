from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ApplicationsPatchPathParams:
    application_object_id: str = field(metadata={'path_param': { 'field_name': 'applicationObjectId', 'style': 'simple', 'explode': False }})
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ApplicationsPatchQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class ApplicationsPatchRequests:
    application_update_parameters: Optional[shared.ApplicationUpdateParameters] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    application_update_parameters1: Optional[shared.ApplicationUpdateParameters] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ApplicationsPatchRequest:
    path_params: ApplicationsPatchPathParams = field()
    query_params: ApplicationsPatchQueryParams = field()
    request: ApplicationsPatchRequests = field()
    

@dataclass
class ApplicationsPatchResponse:
    content_type: str = field()
    status_code: int = field()
    graph_error: Optional[shared.GraphError] = field(default=None)
    
