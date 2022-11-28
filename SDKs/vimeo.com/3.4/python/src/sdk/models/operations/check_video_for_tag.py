from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CheckVideoForTagPathParams:
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    word: str = field(metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    

@dataclass
class CheckVideoForTagRequest:
    path_params: CheckVideoForTagPathParams = field()
    

@dataclass
class CheckVideoForTagResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    tag: Optional[shared.Tag] = field(default=None)
    
