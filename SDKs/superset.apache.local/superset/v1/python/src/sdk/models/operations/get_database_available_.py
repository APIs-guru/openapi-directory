from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetDatabaseAvailableSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetDatabaseAvailable200ApplicationJSON:
    available_drivers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('available_drivers') }})
    default_driver: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_driver') }})
    engine: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('engine') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameters') }})
    preferred: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferred') }})
    sqlalchemy_uri_placeholder: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sqlalchemy_uri_placeholder') }})
    

@dataclass_json
@dataclass
class GetDatabaseAvailable400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDatabaseAvailable500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetDatabaseAvailableRequest:
    security: GetDatabaseAvailableSecurity = field()
    

@dataclass
class GetDatabaseAvailableResponse:
    content_type: str = field()
    status_code: int = field()
    get_database_available_200_application_json_objects: Optional[List[GetDatabaseAvailable200ApplicationJSON]] = field(default=None)
    get_database_available_400_application_json_object: Optional[GetDatabaseAvailable400ApplicationJSON] = field(default=None)
    get_database_available_500_application_json_object: Optional[GetDatabaseAvailable500ApplicationJSON] = field(default=None)
    
