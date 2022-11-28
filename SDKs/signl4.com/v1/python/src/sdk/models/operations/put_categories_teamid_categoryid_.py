from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutCategoriesTeamIDCategoryIDPathParams:
    category_id: str = field(metadata={'path_param': { 'field_name': 'categoryId', 'style': 'simple', 'explode': False }})
    team_id: str = field(metadata={'path_param': { 'field_name': 'teamId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutCategoriesTeamIDCategoryIDRequestsInput:
    category_info: Optional[shared.CategoryInfoInput] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    category_info1: Optional[shared.CategoryInfoInput] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    category_info2: Optional[shared.CategoryInfoInput] = field(default=None, metadata={'request': { 'media_type': 'application/json-patch+json' }})
    category_info3: Optional[shared.CategoryInfoInput] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutCategoriesTeamIDCategoryIDRequest:
    path_params: PutCategoriesTeamIDCategoryIDPathParams = field()
    request: Optional[PutCategoriesTeamIDCategoryIDRequestsInput] = field(default=None)
    

@dataclass
class PutCategoriesTeamIDCategoryIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    category_info: Optional[shared.CategoryInfo] = field(default=None)
    error_response_content: Optional[shared.ErrorResponseContent] = field(default=None)
    
