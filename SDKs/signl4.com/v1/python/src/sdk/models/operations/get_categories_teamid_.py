from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCategoriesTeamIDPathParams:
    team_id: str = field(metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCategoriesTeamIDRequest:
    path_params: GetCategoriesTeamIDPathParams = field()
    

@dataclass
class GetCategoriesTeamIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    category_infos: Optional[List[shared.CategoryInfo]] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    
