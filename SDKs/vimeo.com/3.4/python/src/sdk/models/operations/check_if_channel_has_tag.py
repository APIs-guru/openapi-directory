from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CheckIfChannelHasTagPathParams:
    channel_id: float = field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    word: str = field(metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    

@dataclass
class CheckIfChannelHasTagRequest:
    path_params: CheckIfChannelHasTagPathParams = field()
    

@dataclass
class CheckIfChannelHasTagResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
