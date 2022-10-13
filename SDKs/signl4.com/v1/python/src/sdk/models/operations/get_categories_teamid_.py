from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetCategoriesTeamIDPathParams:
    team_id: str = field(default=None, metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCategoriesTeamIDRequest:
    path_params: GetCategoriesTeamIDPathParams = field(default=None)
    

@dataclass
class GetCategoriesTeamIDResponse:
    body: bytes = field(default=None)
    category_infos: Optional[List[shared.CategoryInfo]] = field(default=None)
    content_type: str = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    status_code: int = field(default=None)
    
