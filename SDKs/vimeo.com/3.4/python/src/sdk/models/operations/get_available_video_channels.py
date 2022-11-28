from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAvailableVideoChannelsPathParams:
    video_id: float = field(metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAvailableVideoChannelsRequest:
    path_params: GetAvailableVideoChannelsPathParams = field()
    

@dataclass
class GetAvailableVideoChannelsResponse:
    content_type: str = field()
    status_code: int = field()
    channels: Optional[List[shared.Channel]] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
