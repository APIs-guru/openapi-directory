from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteCategoriesTeamIDCategoryIDPathParams:
    category_id: str = field(metadata={'path_param': { 'field_name': 'categoryId', 'style': 'simple', 'explode': False }})
    team_id: str = field(metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCategoriesTeamIDCategoryIDRequest:
    path_params: DeleteCategoriesTeamIDCategoryIDPathParams = field()
    

@dataclass
class DeleteCategoriesTeamIDCategoryIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    
