from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetDashboardInfoQueryParams:
    q: Optional[shared.GetInfoSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetDashboardInfoSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetDashboardInfoRequest:
    query_params: GetDashboardInfoQueryParams = field(default=None)
    security: GetDashboardInfoSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetDashboardInfo200ApplicationJSONFiltersColumnName:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    operator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operator' }})
    

@dataclass_json
@dataclass
class GetDashboardInfo200ApplicationJSONFilters:
    column_name: Optional[List[GetDashboardInfo200ApplicationJSONFiltersColumnName]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'column_name' }})
    

@dataclass_json
@dataclass
class GetDashboardInfo200ApplicationJSON:
    add_columns: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add_columns' }})
    edit_columns: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'edit_columns' }})
    filters: Optional[GetDashboardInfo200ApplicationJSONFilters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    permissions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    

@dataclass_json
@dataclass
class GetDashboardInfo400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDashboardInfo401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDashboardInfo422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDashboardInfo500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetDashboardInfoResponse:
    content_type: str = field(default=None)
    get_dashboard_info_200_application_json_object: Optional[GetDashboardInfo200ApplicationJSON] = field(default=None)
    get_dashboard_info_400_application_json_object: Optional[GetDashboardInfo400ApplicationJSON] = field(default=None)
    get_dashboard_info_401_application_json_object: Optional[GetDashboardInfo401ApplicationJSON] = field(default=None)
    get_dashboard_info_422_application_json_object: Optional[GetDashboardInfo422ApplicationJSON] = field(default=None)
    get_dashboard_info_500_application_json_object: Optional[GetDashboardInfo500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
