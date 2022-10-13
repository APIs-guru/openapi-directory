from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetUsersIDCategoriesPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersIDCategoriesRequest:
    path_params: GetUsersIDCategoriesPathParams = field(default=None)
    

@dataclass
class GetUsersIDCategoriesResponse:
    categories: Optional[List[shared.Category]] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
