from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCategoriesTeamIDCategoryIDMetricsPathParams:
    category_id: str = field(metadata={'path_param': { 'field_name': 'categoryId', 'style': 'simple', 'explode': False }})
    team_id: str = field(metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCategoriesTeamIDCategoryIDMetricsRequest:
    path_params: GetCategoriesTeamIDCategoryIDMetricsPathParams = field()
    

@dataclass
class GetCategoriesTeamIDCategoryIDMetricsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    category_metrics: Optional[shared.CategoryMetrics] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    
