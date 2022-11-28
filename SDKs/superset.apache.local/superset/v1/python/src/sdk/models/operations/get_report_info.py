from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetReportInfoQueryParams:
    q: Optional[shared.GetInfoSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetReportInfoSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetReportInfo200ApplicationJSONFiltersColumnName:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    operator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operator') }})
    

@dataclass_json
@dataclass
class GetReportInfo200ApplicationJSONFilters:
    column_name: Optional[List[GetReportInfo200ApplicationJSONFiltersColumnName]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('column_name') }})
    

@dataclass_json
@dataclass
class GetReportInfo200ApplicationJSON:
    add_columns: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('add_columns') }})
    edit_columns: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('edit_columns') }})
    filters: Optional[GetReportInfo200ApplicationJSONFilters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    permissions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    

@dataclass_json
@dataclass
class GetReportInfo400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetReportInfo401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetReportInfo422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetReportInfo500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetReportInfoRequest:
    query_params: GetReportInfoQueryParams = field()
    security: GetReportInfoSecurity = field()
    

@dataclass
class GetReportInfoResponse:
    content_type: str = field()
    status_code: int = field()
    get_report_info_200_application_json_object: Optional[GetReportInfo200ApplicationJSON] = field(default=None)
    get_report_info_400_application_json_object: Optional[GetReportInfo400ApplicationJSON] = field(default=None)
    get_report_info_401_application_json_object: Optional[GetReportInfo401ApplicationJSON] = field(default=None)
    get_report_info_422_application_json_object: Optional[GetReportInfo422ApplicationJSON] = field(default=None)
    get_report_info_500_application_json_object: Optional[GetReportInfo500ApplicationJSON] = field(default=None)
    
