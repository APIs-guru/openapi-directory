from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostListingsSlugFlagPathParams:
    slug: str = field(default=None, metadata={'path_param': { 'field_name': 'slug', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PostListingsSlugFlagRequestBody:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    reason: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    

@dataclass
class PostListingsSlugFlagRequest:
    path_params: PostListingsSlugFlagPathParams = field(default=None)
    request: Optional[PostListingsSlugFlagRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostListingsSlugFlagResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
