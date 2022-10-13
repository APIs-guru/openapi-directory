from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PostUsersIDCategoriesPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostUsersIDCategoriesRequestBody:
    colour: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colour' }})
    parent_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent_id' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass
class PostUsersIDCategoriesRequest:
    path_params: PostUsersIDCategoriesPathParams = field(default=None)
    request: Optional[PostUsersIDCategoriesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostUsersIDCategoriesResponse:
    category: Optional[shared.Category] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
