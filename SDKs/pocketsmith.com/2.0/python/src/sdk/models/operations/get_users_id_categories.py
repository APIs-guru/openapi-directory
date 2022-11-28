from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetUsersIDCategoriesPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersIDCategoriesRequest:
    path_params: GetUsersIDCategoriesPathParams = field()
    

@dataclass
class GetUsersIDCategoriesResponse:
    content_type: str = field()
    status_code: int = field()
    categories: Optional[List[shared.Category]] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
