from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PostListingsSlugFlagPathParams:
    slug: str = field(metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostListingsSlugFlagRequestBody:
    reason: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reason') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    

@dataclass
class PostListingsSlugFlagRequest:
    path_params: PostListingsSlugFlagPathParams = field()
    request: Optional[PostListingsSlugFlagRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostListingsSlugFlagResponse:
    content_type: str = field()
    status_code: int = field()
    
