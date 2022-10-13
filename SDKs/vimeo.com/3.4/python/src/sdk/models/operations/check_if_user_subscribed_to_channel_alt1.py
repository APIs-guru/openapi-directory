from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CheckIfUserSubscribedToChannelAlt1PathParams:
    channel_id: float = field(default=None, metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CheckIfUserSubscribedToChannelAlt1Request:
    path_params: CheckIfUserSubscribedToChannelAlt1PathParams = field(default=None)
    

@dataclass
class CheckIfUserSubscribedToChannelAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
