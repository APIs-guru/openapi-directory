from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetCommentsPathParams:
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    
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
    path_params: GetCommentsPathParams = field(default=None)
    query_params: GetCommentsQueryParams = field(default=None)
    

@dataclass
class GetCommentsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    comments: Optional[List[shared.Comment]] = field(default=None)
    
