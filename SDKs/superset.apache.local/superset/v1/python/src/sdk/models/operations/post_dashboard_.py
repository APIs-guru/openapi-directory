from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PostDashboardSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class PostDashboardRequest:
    request: shared.DashboardRestAPIPost = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostDashboardSecurity = field(default=None)
    

@dataclass_json
@dataclass
class PostDashboard201ApplicationJSON:
    id: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    result: Optional[shared.DashboardRestAPIPost] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass_json
@dataclass
class PostDashboard400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostDashboard401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostDashboard404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PostDashboard500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class PostDashboardResponse:
    content_type: str = field(default=None)
    post_dashboard_201_application_json_object: Optional[PostDashboard201ApplicationJSON] = field(default=None)
    post_dashboard_400_application_json_object: Optional[PostDashboard400ApplicationJSON] = field(default=None)
    post_dashboard_401_application_json_object: Optional[PostDashboard401ApplicationJSON] = field(default=None)
    post_dashboard_404_application_json_object: Optional[PostDashboard404ApplicationJSON] = field(default=None)
    post_dashboard_500_application_json_object: Optional[PostDashboard500ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
