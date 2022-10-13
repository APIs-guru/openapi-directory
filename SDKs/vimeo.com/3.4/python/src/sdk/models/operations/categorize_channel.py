from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CategorizeChannelPathParams:
    category: str = field(default=None, metadata={'path_param': { 'field_name': 'category', 'style': 'simple', 'explode': False }})
    channel_id: float = field(default=None, metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CategorizeChannelSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CategorizeChannelRequest:
    path_params: CategorizeChannelPathParams = field(default=None)
    security: CategorizeChannelSecurity = field(default=None)
    

@dataclass
class CategorizeChannelResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
