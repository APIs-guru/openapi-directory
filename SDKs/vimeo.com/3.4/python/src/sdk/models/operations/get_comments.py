from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetCommentsPathParams:
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    
class GetCommentsDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclass
class GetCommentsQueryParams:
    direction: Optional[GetCommentsDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCommentsRequest:
    path_params: GetCommentsPathParams = field()
    query_params: GetCommentsQueryParams = field()
    

@dataclass
class GetCommentsResponse:
    content_type: str = field()
    status_code: int = field()
    comments: Optional[List[shared.Comment]] = field(default=None)
    
