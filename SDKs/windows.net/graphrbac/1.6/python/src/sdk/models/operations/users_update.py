from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class UsersUpdatePathParams:
    tenant_id: str = field(metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    upn_or_object_id: str = field(metadata={'path_param': { 'field_name': 'upnOrObjectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersUpdateQueryParams:
    api_version: str = field(metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class UsersUpdateRequests:
    user_update_parameters: Optional[dict[str, dict[str, Any]]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    user_update_parameters1: Optional[dict[str, dict[str, Any]]] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UsersUpdateRequest:
    path_params: UsersUpdatePathParams = field()
    query_params: UsersUpdateQueryParams = field()
    request: UsersUpdateRequests = field()
    

@dataclass
class UsersUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    graph_error: Optional[shared.GraphError] = field(default=None)
    
