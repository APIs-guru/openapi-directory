from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ArticleAddMeasureUnitRequest:
    request: List[shared.MeasureUnitDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ArticleAddMeasureUnitResponse:
    api_response: Optional[shared.APIResponse] = field(default=None)
    content_type: str = field(default=None)
    default_response_dto_of_status_dto: Optional[shared.DefaultResponseDtoOfStatusDto] = field(default=None)
    status_code: int = field(default=None)
    
