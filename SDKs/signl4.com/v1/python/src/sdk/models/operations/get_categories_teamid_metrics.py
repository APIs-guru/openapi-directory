from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCategoriesTeamIDMetricsPathParams:
    team_id: str = field(default=None, metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCategoriesTeamIDMetricsRequest:
    path_params: GetCategoriesTeamIDMetricsPathParams = field(default=None)
    

@dataclass
class GetCategoriesTeamIDMetricsResponse:
    body: bytes = field(default=None)
    category_metrics: Optional[List[shared.CategoryMetrics]] = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    status_code: int = field(default=None)
    
