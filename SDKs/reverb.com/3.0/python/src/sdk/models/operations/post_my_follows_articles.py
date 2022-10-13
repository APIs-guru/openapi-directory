from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostMyFollowsArticlesRequestBody:
    category_uuids: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category_uuids' }})
    

@dataclass
class PostMyFollowsArticlesSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostMyFollowsArticlesRequest:
    request: Optional[PostMyFollowsArticlesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostMyFollowsArticlesSecurity = field(default=None)
    

@dataclass
class PostMyFollowsArticlesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
