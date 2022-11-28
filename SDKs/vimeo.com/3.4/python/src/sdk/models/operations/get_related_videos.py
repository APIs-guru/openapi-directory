from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetRelatedVideosPathParams:
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    
class GetRelatedVideosFilterEnum(str, Enum):
    RELATED = "related"


@dataclass
class GetRelatedVideosQueryParams:
    filter: Optional[GetRelatedVideosFilterEnum] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRelatedVideosRequest:
    path_params: GetRelatedVideosPathParams = field()
    query_params: GetRelatedVideosQueryParams = field()
    

@dataclass
class GetRelatedVideosResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    videos: Optional[List[shared.Video]] = field(default=None)
    
