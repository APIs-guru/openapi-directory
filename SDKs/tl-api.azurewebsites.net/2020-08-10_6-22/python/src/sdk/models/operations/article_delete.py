from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ArticleDeleteQueryParams:
    article_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'ArticleId', 'style': 'form', 'explode': True }})
    

@dataclass
class ArticleDeleteRequest:
    query_params: ArticleDeleteQueryParams = field()
    

@dataclass
class ArticleDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    api_exception: Optional[shared.APIException] = field(default=None)
    default_response_dto_of_integer: Optional[shared.DefaultResponseDtoOfInteger] = field(default=None)
    
