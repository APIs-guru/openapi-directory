from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class DeleteDashboardQueryParams:
    q: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class DeleteDashboardSecurity:
    jwt: shared.SchemeJwt = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass_json
@dataclass
class DeleteDashboard200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteDashboard401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteDashboard403ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteDashboard404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteDashboard422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class DeleteDashboard500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class DeleteDashboardRequest:
    query_params: DeleteDashboardQueryParams = field()
    security: DeleteDashboardSecurity = field()
    

@dataclass
class DeleteDashboardResponse:
    content_type: str = field()
    status_code: int = field()
    delete_dashboard_200_application_json_object: Optional[DeleteDashboard200ApplicationJSON] = field(default=None)
    delete_dashboard_401_application_json_object: Optional[DeleteDashboard401ApplicationJSON] = field(default=None)
    delete_dashboard_403_application_json_object: Optional[DeleteDashboard403ApplicationJSON] = field(default=None)
    delete_dashboard_404_application_json_object: Optional[DeleteDashboard404ApplicationJSON] = field(default=None)
    delete_dashboard_422_application_json_object: Optional[DeleteDashboard422ApplicationJSON] = field(default=None)
    delete_dashboard_500_application_json_object: Optional[DeleteDashboard500ApplicationJSON] = field(default=None)
    
