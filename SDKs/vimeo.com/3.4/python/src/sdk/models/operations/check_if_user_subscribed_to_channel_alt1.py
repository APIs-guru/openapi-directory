from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CheckIfUserSubscribedToChannelAlt1PathParams:
    channel_id: float = field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CheckIfUserSubscribedToChannelAlt1Request:
    path_params: CheckIfUserSubscribedToChannelAlt1PathParams = field()
    

@dataclass
class CheckIfUserSubscribedToChannelAlt1Response:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
