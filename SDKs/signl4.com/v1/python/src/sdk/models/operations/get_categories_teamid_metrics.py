from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCategoriesTeamIDMetricsPathParams:
    team_id: str = field(metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCategoriesTeamIDMetricsRequest:
    path_params: GetCategoriesTeamIDMetricsPathParams = field()
    

@dataclass
class GetCategoriesTeamIDMetricsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    category_metrics: Optional[List[shared.CategoryMetrics]] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    
