from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CategorizeChannelPathParams:
    category: str = field(metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    channel_id: float = field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CategorizeChannelSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CategorizeChannelRequest:
    path_params: CategorizeChannelPathParams = field()
    security: CategorizeChannelSecurity = field()
    

@dataclass
class CategorizeChannelResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
