from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetChartInfoQueryParams:
    q: Optional[shared.GetInfoSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetChartInfoSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetChartInfoRequest:
    query_params: GetChartInfoQueryParams = field(default=None)
    security: GetChartInfoSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetChartInfo200ApplicationJSONFiltersColumnName:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    operator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operator' }})
    

@dataclass_json
@dataclass
class GetChartInfo200ApplicationJSONFilters:
    column_name: Optional[List[GetChartInfo200ApplicationJSONFiltersColumnName]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'column_name' }})
    

@dataclass_json
@dataclass
class GetChartInfo200ApplicationJSON:
    add_columns: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'add_columns' }})
    edit_columns: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'edit_columns' }})
    filters: Optional[GetChartInfo200ApplicationJSONFilters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    permissions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    

@dataclass_json
@dataclass
class GetChartInfo400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetChartInfo401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetChartInfo422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetChartInfo500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetChartInfoResponse:
    content_type: str = field(default=None)
    get_chart_info_200_application_json_object: Optional[GetChartInfo200ApplicationJSON] = field(default=None)
    get_chart_info_400_application_json_object: Optional[GetChartInfo400ApplicationJSON] = field(default=None)
    get_chart_info_401_application_json_object: Optional[GetChartInfo401ApplicationJSON] = field(default=None)
    get_chart_info_422_application_json_object: Optional[GetChartInfo422ApplicationJSON] = field(default=None)
    get_chart_info_500_application_json_object: Optional[GetChartInfo500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
