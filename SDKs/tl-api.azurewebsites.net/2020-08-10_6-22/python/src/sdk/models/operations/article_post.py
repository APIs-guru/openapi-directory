from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ArticlePostRequest:
    request: shared.ArticleDto = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ArticlePostResponse:
    content_type: str = field()
    status_code: int = field()
    api_response: Optional[shared.APIResponse] = field(default=None)
    default_response_dto_of_status_dto: Optional[shared.DefaultResponseDtoOfStatusDto] = field(default=None)
    
