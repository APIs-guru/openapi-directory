from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetDashboardIDOrSlugPathParams:
    id_or_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'id_or_slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDashboardIDOrSlugSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetDashboardIDOrSlugRequest:
    path_params: GetDashboardIDOrSlugPathParams = field(default=None)
    security: GetDashboardIDOrSlugSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetDashboardIDOrSlug200ApplicationJSON:
    result: Optional[shared.DashboardGetResponseSchema] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass_json
@dataclass
class GetDashboardIDOrSlug400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDashboardIDOrSlug401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDashboardIDOrSlug404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetDashboardIDOrSlugResponse:
    content_type: str = field(default=None)
    get_dashboard_id_or_slug_200_application_json_object: Optional[GetDashboardIDOrSlug200ApplicationJSON] = field(default=None)
    get_dashboard_id_or_slug_400_application_json_object: Optional[GetDashboardIDOrSlug400ApplicationJSON] = field(default=None)
    get_dashboard_id_or_slug_401_application_json_object: Optional[GetDashboardIDOrSlug401ApplicationJSON] = field(default=None)
    get_dashboard_id_or_slug_404_application_json_object: Optional[GetDashboardIDOrSlug404ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
