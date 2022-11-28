from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetChannelTagsPathParams:
    channel_id: float = field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetChannelTagsRequest:
    path_params: GetChannelTagsPathParams = field()
    

@dataclass
class GetChannelTagsResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    tags: Optional[List[shared.Tag]] = field(default=None)
    
