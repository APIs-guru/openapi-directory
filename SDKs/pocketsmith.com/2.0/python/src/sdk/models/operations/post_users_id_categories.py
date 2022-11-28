from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PostUsersIDCategoriesPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostUsersIDCategoriesRequestBody:
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    colour: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colour') }})
    parent_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_id') }})
    

@dataclass
class PostUsersIDCategoriesRequest:
    path_params: PostUsersIDCategoriesPathParams = field()
    request: Optional[PostUsersIDCategoriesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostUsersIDCategoriesResponse:
    content_type: str = field()
    status_code: int = field()
    category: Optional[shared.Category] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
