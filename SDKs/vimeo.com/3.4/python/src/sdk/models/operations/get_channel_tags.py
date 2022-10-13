from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetChannelTagsPathParams:
    channel_id: float = field(default=None, metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetChannelTagsRequest:
    path_params: GetChannelTagsPathParams = field(default=None)
    

@dataclass
class GetChannelTagsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    tags: Optional[List[shared.Tag]] = field(default=None)
    
