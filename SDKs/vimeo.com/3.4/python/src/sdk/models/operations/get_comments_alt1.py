from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetCommentsAlt1PathParams:
    channel_id: float = field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    
class GetCommentsAlt1DirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclass
class GetCommentsAlt1QueryParams:
    direction: Optional[GetCommentsAlt1DirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCommentsAlt1Request:
    path_params: GetCommentsAlt1PathParams = field()
    query_params: GetCommentsAlt1QueryParams = field()
    

@dataclass
class GetCommentsAlt1Response:
    content_type: str = field()
    status_code: int = field()
    comments: Optional[List[shared.Comment]] = field(default=None)
    
