from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ArticleGymArticleDetailsPathParams:
    article_id: int = field(metadata={'path_param': { 'field_name': 'articleId', 'style': 'simple', 'explode': False }})
    gym_id: int = field(metadata={'path_param': { 'field_name': 'gymId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ArticleGymArticleDetailsRequest:
    path_params: ArticleGymArticleDetailsPathParams = field()
    

@dataclass
class ArticleGymArticleDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    api_response: Optional[shared.APIResponse] = field(default=None)
    default_response_dto_of_list_of_article_search_dto: Optional[shared.DefaultResponseDtoOfListOfArticleSearchDto] = field(default=None)
    gym_article_details_dto: Optional[shared.GymArticleDetailsDto] = field(default=None)
    
