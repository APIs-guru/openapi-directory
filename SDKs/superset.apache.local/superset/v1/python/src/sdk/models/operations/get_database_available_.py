from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetDatabaseAvailableSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetDatabaseAvailableRequest:
    security: GetDatabaseAvailableSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetDatabaseAvailable200ApplicationJSON:
    available_drivers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'available_drivers' }})
    default_driver: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default_driver' }})
    engine: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'engine' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameters' }})
    preferred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferred' }})
    sqlalchemy_uri_placeholder: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sqlalchemy_uri_placeholder' }})
    

@dataclass_json
@dataclass
class GetDatabaseAvailable400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDatabaseAvailable500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetDatabaseAvailableResponse:
    content_type: str = field(default=None)
    get_database_available_200_application_json_objects: Optional[List[GetDatabaseAvailable200ApplicationJSON]] = field(default=None)
    get_database_available_400_application_json_object: Optional[GetDatabaseAvailable400ApplicationJSON] = field(default=None)
    get_database_available_500_application_json_object: Optional[GetDatabaseAvailable500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
