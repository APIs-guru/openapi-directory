from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class ObjectsGetObjectsByObjectIdsPathParams:
    tenant_id: str = field(default=None, metadata={'path_param': { 'field_name': 'tenantID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ObjectsGetObjectsByObjectIdsQueryParams:
    api_version: str = field(default=None, metadata={'query_param': { 'field_name': 'api-version', 'style': 'form', 'explode': True }})
    

@dataclass
class ObjectsGetObjectsByObjectIdsRequests:
    get_objects_parameters: Optional[dict[str, dict[str, Any]]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    get_objects_parameters1: Optional[dict[str, dict[str, Any]]] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class ObjectsGetObjectsByObjectIdsRequest:
    path_params: ObjectsGetObjectsByObjectIdsPathParams = field(default=None)
    query_params: ObjectsGetObjectsByObjectIdsQueryParams = field(default=None)
    request: ObjectsGetObjectsByObjectIdsRequests = field(default=None)
    

@dataclass
class ObjectsGetObjectsByObjectIdsResponse:
    content_type: str = field(default=None)
    directory_object_list_result: Optional[shared.DirectoryObjectListResult] = field(default=None)
    status_code: int = field(default=None)
    
