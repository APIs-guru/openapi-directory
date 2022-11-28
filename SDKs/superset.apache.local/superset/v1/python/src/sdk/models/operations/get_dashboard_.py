from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetDashboardQueryParams:
    q: Optional[shared.GetListSchema] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetDashboardSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class GetDashboard200ApplicationJSONDescriptionColumns:
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('column_name') }})
    

@dataclass_json
@dataclass
class GetDashboard200ApplicationJSONLabelColumns:
    column_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('column_name') }})
    

@dataclass_json
@dataclass
class GetDashboard200ApplicationJSON:
    count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    description_columns: Optional[GetDashboard200ApplicationJSONDescriptionColumns] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description_columns') }})
    ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ids') }})
    label_columns: Optional[GetDashboard200ApplicationJSONLabelColumns] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label_columns') }})
    list_columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('list_columns') }})
    list_title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('list_title') }})
    order_columns: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order_columns') }})
    result: Optional[List[shared.DashboardRestAPIGetList]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass_json
@dataclass
class GetDashboard400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDashboard401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDashboard422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetDashboard500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetDashboardRequest:
    query_params: GetDashboardQueryParams = field()
    security: GetDashboardSecurity = field()
    

@dataclass
class GetDashboardResponse:
    content_type: str = field()
    status_code: int = field()
    get_dashboard_200_application_json_object: Optional[GetDashboard200ApplicationJSON] = field(default=None)
    get_dashboard_400_application_json_object: Optional[GetDashboard400ApplicationJSON] = field(default=None)
    get_dashboard_401_application_json_object: Optional[GetDashboard401ApplicationJSON] = field(default=None)
    get_dashboard_422_application_json_object: Optional[GetDashboard422ApplicationJSON] = field(default=None)
    get_dashboard_500_application_json_object: Optional[GetDashboard500ApplicationJSON] = field(default=None)
    
