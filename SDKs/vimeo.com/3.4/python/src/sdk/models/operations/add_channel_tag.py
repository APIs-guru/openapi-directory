from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AddChannelTagPathParams:
    channel_id: float = field(default=None, metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    word: str = field(default=None, metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddChannelTagSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddChannelTagRequest:
    path_params: AddChannelTagPathParams = field(default=None)
    security: AddChannelTagSecurity = field(default=None)
    

@dataclass
class AddChannelTagResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
