from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetDatasetInfoQueryParams:
    q: Optional[shared.GetInfoSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetDatasetInfoSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetDatasetInfo200ApplicationJSONFiltersColumnName:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    

@dataclass_json
@dataclass
class GetDatasetInfo200ApplicationJSONFilters:
    column_name: Optional[List[GetDatasetInfo200ApplicationJSONFiltersColumnName]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('column_name') }})
    

@dataclass_json
@dataclass
class GetDatasetInfo200ApplicationJSON:
    add_columns: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_columns') }})
    edit_columns: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('edit_columns') }})
    filters: Optional[GetDatasetInfo200ApplicationJSONFilters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    permissions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    

@dataclass_json
@dataclass
class GetDatasetInfo400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDatasetInfo401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDatasetInfo422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDatasetInfo500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetDatasetInfoRequest:
    query_params: GetDatasetInfoQueryParams = field()
    security: GetDatasetInfoSecurity = field()
    

@dataclass
class GetDatasetInfoResponse:
    content_type: str = field()
    status_code: int = field()
    get_dataset_info_200_application_json_object: Optional[GetDatasetInfo200ApplicationJSON] = field(default=None)
    get_dataset_info_400_application_json_object: Optional[GetDatasetInfo400ApplicationJSON] = field(default=None)
    get_dataset_info_401_application_json_object: Optional[GetDatasetInfo401ApplicationJSON] = field(default=None)
    get_dataset_info_422_application_json_object: Optional[GetDatasetInfo422ApplicationJSON] = field(default=None)
    get_dataset_info_500_application_json_object: Optional[GetDatasetInfo500ApplicationJSON] = field(default=None)
    
