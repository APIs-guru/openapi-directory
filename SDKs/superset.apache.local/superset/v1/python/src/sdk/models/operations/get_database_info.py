from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetDatabaseInfoQueryParams:
    q: Optional[shared.GetInfoSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetDatabaseInfoSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetDatabaseInfo200ApplicationJSONFiltersColumnName:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    

@dataclass_json
@dataclass
class GetDatabaseInfo200ApplicationJSONFilters:
    column_name: Optional[List[GetDatabaseInfo200ApplicationJSONFiltersColumnName]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('column_name') }})
    

@dataclass_json
@dataclass
class GetDatabaseInfo200ApplicationJSON:
    add_columns: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_columns') }})
    edit_columns: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('edit_columns') }})
    filters: Optional[GetDatabaseInfo200ApplicationJSONFilters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    permissions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    

@dataclass_json
@dataclass
class GetDatabaseInfo400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDatabaseInfo401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDatabaseInfo422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDatabaseInfo500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetDatabaseInfoRequest:
    query_params: GetDatabaseInfoQueryParams = field()
    security: GetDatabaseInfoSecurity = field()
    

@dataclass
class GetDatabaseInfoResponse:
    content_type: str = field()
    status_code: int = field()
    get_database_info_200_application_json_object: Optional[GetDatabaseInfo200ApplicationJSON] = field(default=None)
    get_database_info_400_application_json_object: Optional[GetDatabaseInfo400ApplicationJSON] = field(default=None)
    get_database_info_401_application_json_object: Optional[GetDatabaseInfo401ApplicationJSON] = field(default=None)
    get_database_info_422_application_json_object: Optional[GetDatabaseInfo422ApplicationJSON] = field(default=None)
    get_database_info_500_application_json_object: Optional[GetDatabaseInfo500ApplicationJSON] = field(default=None)
    
