from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ArticlePutRequest:
    request: shared.ArticleDto = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ArticlePutResponse:
    api_exception: Optional[shared.APIException] = field(default=None)
    content_type: str = field(default=None)
    default_response_dto_of_status_dto: Optional[shared.DefaultResponseDtoOfStatusDto] = field(default=None)
    status_code: int = field(default=None)
    
