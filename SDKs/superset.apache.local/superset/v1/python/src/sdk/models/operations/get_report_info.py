from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetReportInfoQueryParams:
    q: Optional[shared.GetInfoSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetReportInfoSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetReportInfoRequest:
    query_params: GetReportInfoQueryParams = field(default=None)
    security: GetReportInfoSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetReportInfo200ApplicationJSONFiltersColumnName:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    operator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operator' }})
    

@dataclass_json
@dataclass
class GetReportInfo200ApplicationJSONFilters:
    column_name: Optional[List[GetReportInfo200ApplicationJSONFiltersColumnName]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'column_name' }})
    

@dataclass_json
@dataclass
class GetReportInfo200ApplicationJSON:
    add_columns: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add_columns' }})
    edit_columns: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'edit_columns' }})
    filters: Optional[GetReportInfo200ApplicationJSONFilters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    permissions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    

@dataclass_json
@dataclass
class GetReportInfo400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetReportInfo401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetReportInfo422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetReportInfo500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetReportInfoResponse:
    content_type: str = field(default=None)
    get_report_info_200_application_json_object: Optional[GetReportInfo200ApplicationJSON] = field(default=None)
    get_report_info_400_application_json_object: Optional[GetReportInfo400ApplicationJSON] = field(default=None)
    get_report_info_401_application_json_object: Optional[GetReportInfo401ApplicationJSON] = field(default=None)
    get_report_info_422_application_json_object: Optional[GetReportInfo422ApplicationJSON] = field(default=None)
    get_report_info_500_application_json_object: Optional[GetReportInfo500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
