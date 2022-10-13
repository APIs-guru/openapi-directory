from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CheckVideoForTagPathParams:
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    word: str = field(default=None, metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    

@dataclass
class CheckVideoForTagRequest:
    path_params: CheckVideoForTagPathParams = field(default=None)
    

@dataclass
class CheckVideoForTagResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    tag: Optional[shared.Tag] = field(default=None)
    
