from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetDashboardIDOrSlugChartsPathParams:
    id_or_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'id_or_slug', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDashboardIDOrSlugChartsSecurity:
    jwt: shared.SchemeJwt = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetDashboardIDOrSlugChartsRequest:
    path_params: GetDashboardIDOrSlugChartsPathParams = field(default=None)
    security: GetDashboardIDOrSlugChartsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class GetDashboardIDOrSlugCharts200ApplicationJSON:
    result: Optional[List[shared.ChartEntityResponseSchema]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass_json
@dataclass
class GetDashboardIDOrSlugCharts400ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDashboardIDOrSlugCharts401ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetDashboardIDOrSlugCharts404ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetDashboardIDOrSlugChartsResponse:
    content_type: str = field(default=None)
    get_dashboard_id_or_slug_charts_200_application_json_object: Optional[GetDashboardIDOrSlugCharts200ApplicationJSON] = field(default=None)
    get_dashboard_id_or_slug_charts_400_application_json_object: Optional[GetDashboardIDOrSlugCharts400ApplicationJSON] = field(default=None)
    get_dashboard_id_or_slug_charts_401_application_json_object: Optional[GetDashboardIDOrSlugCharts401ApplicationJSON] = field(default=None)
    get_dashboard_id_or_slug_charts_404_application_json_object: Optional[GetDashboardIDOrSlugCharts404ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
