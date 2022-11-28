from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetEmbedPresetVideosAlt1PathParams:
    preset_id: float = field(metadata={'path_param': { 'field_name': 'preset_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEmbedPresetVideosAlt1QueryParams:
    page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEmbedPresetVideosAlt1Request:
    path_params: GetEmbedPresetVideosAlt1PathParams = field()
    query_params: GetEmbedPresetVideosAlt1QueryParams = field()
    

@dataclass
class GetEmbedPresetVideosAlt1Response:
    content_type: str = field()
    status_code: int = field()
    videos: Optional[List[shared.Video]] = field(default=None)
    
