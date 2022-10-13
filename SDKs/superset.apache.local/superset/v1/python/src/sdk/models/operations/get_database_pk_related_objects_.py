from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetDatabasePkRelatedObjectsPathParams:
    pk: int = field(default=None, metadata={'path_param': { 'field_name': 'pk', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDatabasePkRelatedObjectsSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetDatabasePkRelatedObjectsRequest:
    path_params: GetDatabasePkRelatedObjectsPathParams = field(default=None)
    security: GetDatabasePkRelatedObjectsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetDatabasePkRelatedObjects401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDatabasePkRelatedObjects404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDatabasePkRelatedObjects500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetDatabasePkRelatedObjectsResponse:
    content_type: str = field(default=None)
    database_related_objects_response: Optional[shared.DatabaseRelatedObjectsResponse] = field(default=None)
    get_database_pk_related_objects_401_application_json_object: Optional[GetDatabasePkRelatedObjects401ApplicationJSON] = field(default=None)
    get_database_pk_related_objects_404_application_json_object: Optional[GetDatabasePkRelatedObjects404ApplicationJSON] = field(default=None)
    get_database_pk_related_objects_500_application_json_object: Optional[GetDatabasePkRelatedObjects500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
