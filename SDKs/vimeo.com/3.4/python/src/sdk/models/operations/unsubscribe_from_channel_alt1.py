from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UnsubscribeFromChannelAlt1PathParams:
    channel_id: float = field(default=None, metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnsubscribeFromChannelAlt1Security:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UnsubscribeFromChannelAlt1Request:
    path_params: UnsubscribeFromChannelAlt1PathParams = field(default=None)
    security: UnsubscribeFromChannelAlt1Security = field(default=None)
    

@dataclass
class UnsubscribeFromChannelAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
