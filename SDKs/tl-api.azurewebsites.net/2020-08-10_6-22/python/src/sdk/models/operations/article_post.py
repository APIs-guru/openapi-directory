from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ArticlePostRequest:
    request: shared.ArticleDto = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ArticlePostResponse:
    api_response: Optional[shared.APIResponse] = field(default=None)
    content_type: str = field(default=None)
    default_response_dto_of_status_dto: Optional[shared.DefaultResponseDtoOfStatusDto] = field(default=None)
    status_code: int = field(default=None)
    
