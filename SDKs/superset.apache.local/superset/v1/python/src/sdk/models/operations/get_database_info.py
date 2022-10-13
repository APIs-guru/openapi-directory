from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetDatabaseInfoQueryParams:
    q: Optional[shared.GetInfoSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetDatabaseInfoSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetDatabaseInfoRequest:
    query_params: GetDatabaseInfoQueryParams = field(default=None)
    security: GetDatabaseInfoSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetDatabaseInfo200ApplicationJSONFiltersColumnName:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    operator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operator' }})
    

@dataclass_json
@dataclass
class GetDatabaseInfo200ApplicationJSONFilters:
    column_name: Optional[List[GetDatabaseInfo200ApplicationJSONFiltersColumnName]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'column_name' }})
    

@dataclass_json
@dataclass
class GetDatabaseInfo200ApplicationJSON:
    add_columns: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add_columns' }})
    edit_columns: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'edit_columns' }})
    filters: Optional[GetDatabaseInfo200ApplicationJSONFilters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    permissions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    

@dataclass_json
@dataclass
class GetDatabaseInfo400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDatabaseInfo401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDatabaseInfo422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDatabaseInfo500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetDatabaseInfoResponse:
    content_type: str = field(default=None)
    get_database_info_200_application_json_object: Optional[GetDatabaseInfo200ApplicationJSON] = field(default=None)
    get_database_info_400_application_json_object: Optional[GetDatabaseInfo400ApplicationJSON] = field(default=None)
    get_database_info_401_application_json_object: Optional[GetDatabaseInfo401ApplicationJSON] = field(default=None)
    get_database_info_422_application_json_object: Optional[GetDatabaseInfo422ApplicationJSON] = field(default=None)
    get_database_info_500_application_json_object: Optional[GetDatabaseInfo500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
