from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetSavedQueryInfoQueryParams:
    q: Optional[shared.GetInfoSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetSavedQueryInfoSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetSavedQueryInfo200ApplicationJSONFiltersColumnName:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    

@dataclass_json
@dataclass
class GetSavedQueryInfo200ApplicationJSONFilters:
    column_name: Optional[List[GetSavedQueryInfo200ApplicationJSONFiltersColumnName]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('column_name') }})
    

@dataclass_json
@dataclass
class GetSavedQueryInfo200ApplicationJSON:
    add_columns: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_columns') }})
    edit_columns: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('edit_columns') }})
    filters: Optional[GetSavedQueryInfo200ApplicationJSONFilters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    permissions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    

@dataclass_json
@dataclass
class GetSavedQueryInfo400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetSavedQueryInfo401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetSavedQueryInfo422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetSavedQueryInfo500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetSavedQueryInfoRequest:
    query_params: GetSavedQueryInfoQueryParams = field()
    security: GetSavedQueryInfoSecurity = field()
    

@dataclass
class GetSavedQueryInfoResponse:
    content_type: str = field()
    status_code: int = field()
    get_saved_query_info_200_application_json_object: Optional[GetSavedQueryInfo200ApplicationJSON] = field(default=None)
    get_saved_query_info_400_application_json_object: Optional[GetSavedQueryInfo400ApplicationJSON] = field(default=None)
    get_saved_query_info_401_application_json_object: Optional[GetSavedQueryInfo401ApplicationJSON] = field(default=None)
    get_saved_query_info_422_application_json_object: Optional[GetSavedQueryInfo422ApplicationJSON] = field(default=None)
    get_saved_query_info_500_application_json_object: Optional[GetSavedQueryInfo500ApplicationJSON] = field(default=None)
    
