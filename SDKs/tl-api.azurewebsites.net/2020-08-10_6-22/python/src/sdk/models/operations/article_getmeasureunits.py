from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ArticleGetMeasureUnitsQueryParams:
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class ArticleGetMeasureUnitsRequest:
    query_params: ArticleGetMeasureUnitsQueryParams = field(default=None)
    

@dataclass
class ArticleGetMeasureUnitsResponse:
    api_response: Optional[shared.APIResponse] = field(default=None)
    content_type: str = field(default=None)
    default_response_dto_of_status_dto: Optional[shared.DefaultResponseDtoOfStatusDto] = field(default=None)
    status_code: int = field(default=None)
    
