from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ArticleGetPathParams:
    article_id: int = field(default=None, metadata={'path_param': { 'field_name': 'articleID', 'style': 'simple', 'explode': False }})
    

@dataclass
class ArticleGetRequest:
    path_params: ArticleGetPathParams = field(default=None)
    

@dataclass
class ArticleGetResponse:
    api_response: Optional[shared.APIResponse] = field(default=None)
    content_type: str = field(default=None)
    default_response_dto_of_article_dto: Optional[shared.DefaultResponseDtoOfArticleDto] = field(default=None)
    status_code: int = field(default=None)
    
