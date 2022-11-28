from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCategoriesTeamIDCategoryIDPathParams:
    category_id: str = field(metadata={'path_param': { 'field_name': 'categoryId', 'style': 'simple', 'explode': False }})
    team_id: str = field(metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCategoriesTeamIDCategoryIDRequest:
    path_params: GetCategoriesTeamIDCategoryIDPathParams = field()
    

@dataclass
class GetCategoriesTeamIDCategoryIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    category_info: Optional[shared.CategoryInfo] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    
