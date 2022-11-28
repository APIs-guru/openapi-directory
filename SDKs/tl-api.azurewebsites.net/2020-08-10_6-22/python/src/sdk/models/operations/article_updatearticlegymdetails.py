from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class ArticleUpdateArticleGymDetailsRequest:
    request: List[shared.GymArticleDetailsDto] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ArticleUpdateArticleGymDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    api_response: Optional[shared.APIResponse] = field(default=None)
    default_response_dto_of_status_dto: Optional[shared.DefaultResponseDtoOfStatusDto] = field(default=None)
    
