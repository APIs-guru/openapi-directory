from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetChartFavoriteStatusQueryParams:
    q: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'serialization': 'json' }})
    

@dataclass
class GetChartFavoriteStatusSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetChartFavoriteStatusRequest:
    query_params: GetChartFavoriteStatusQueryParams = field(default=None)
    security: GetChartFavoriteStatusSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetChartFavoriteStatus400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetChartFavoriteStatus401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetChartFavoriteStatus404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetChartFavoriteStatus500ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetChartFavoriteStatusResponse:
    content_type: str = field(default=None)
    get_chart_favorite_status_400_application_json_object: Optional[GetChartFavoriteStatus400ApplicationJSON] = field(default=None)
    get_chart_favorite_status_401_application_json_object: Optional[GetChartFavoriteStatus401ApplicationJSON] = field(default=None)
    get_chart_favorite_status_404_application_json_object: Optional[GetChartFavoriteStatus404ApplicationJSON] = field(default=None)
    get_chart_favorite_status_500_application_json_object: Optional[GetChartFavoriteStatus500ApplicationJSON] = field(default=None)
    get_fav_star_ids_schema: Optional[shared.GetFavStarIdsSchema] = field(default=None)
    status_code: int = field(default=None)
    
