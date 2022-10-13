from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SubscribeToChannelAlt1PathParams:
    channel_id: float = field(default=None, metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SubscribeToChannelAlt1Security:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class SubscribeToChannelAlt1Request:
    path_params: SubscribeToChannelAlt1PathParams = field(default=None)
    security: SubscribeToChannelAlt1Security = field(default=None)
    

@dataclass
class SubscribeToChannelAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
