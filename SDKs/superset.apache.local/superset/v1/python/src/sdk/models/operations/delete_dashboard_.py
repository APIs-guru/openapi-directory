from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class DeleteDashboardQueryParams:
    q: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class DeleteDashboardSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class DeleteDashboardRequest:
    query_params: DeleteDashboardQueryParams = field(default=None)
    security: DeleteDashboardSecurity = field(default=None)
    

@dataclass_json
@dataclass
class DeleteDashboard200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteDashboard401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteDashboard403ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteDashboard404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteDashboard422ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteDashboard500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class DeleteDashboardResponse:
    content_type: str = field(default=None)
    delete_dashboard_200_application_json_object: Optional[DeleteDashboard200ApplicationJSON] = field(default=None)
    delete_dashboard_401_application_json_object: Optional[DeleteDashboard401ApplicationJSON] = field(default=None)
    delete_dashboard_403_application_json_object: Optional[DeleteDashboard403ApplicationJSON] = field(default=None)
    delete_dashboard_404_application_json_object: Optional[DeleteDashboard404ApplicationJSON] = field(default=None)
    delete_dashboard_422_application_json_object: Optional[DeleteDashboard422ApplicationJSON] = field(default=None)
    delete_dashboard_500_application_json_object: Optional[DeleteDashboard500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
