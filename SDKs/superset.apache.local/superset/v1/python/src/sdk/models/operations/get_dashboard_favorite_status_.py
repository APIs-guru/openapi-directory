from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetDashboardFavoriteStatusQueryParams:
    q: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetDashboardFavoriteStatusSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetDashboardFavoriteStatusRequest:
    query_params: GetDashboardFavoriteStatusQueryParams = field(default=None)
    security: GetDashboardFavoriteStatusSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetDashboardFavoriteStatus400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDashboardFavoriteStatus401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDashboardFavoriteStatus404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDashboardFavoriteStatus500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetDashboardFavoriteStatusResponse:
    content_type: str = field(default=None)
    get_dashboard_favorite_status_400_application_json_object: Optional[GetDashboardFavoriteStatus400ApplicationJSON] = field(default=None)
    get_dashboard_favorite_status_401_application_json_object: Optional[GetDashboardFavoriteStatus401ApplicationJSON] = field(default=None)
    get_dashboard_favorite_status_404_application_json_object: Optional[GetDashboardFavoriteStatus404ApplicationJSON] = field(default=None)
    get_dashboard_favorite_status_500_application_json_object: Optional[GetDashboardFavoriteStatus500ApplicationJSON] = field(default=None)
    get_fav_star_ids_schema: Optional[shared.GetFavStarIdsSchema] = field(default=None)
    status_code: int = field(default=None)
    
