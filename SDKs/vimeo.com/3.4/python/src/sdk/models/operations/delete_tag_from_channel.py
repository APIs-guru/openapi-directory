from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteTagFromChannelPathParams:
    channel_id: float = field(metadata={'path_param': { 'field_name': 'channel_id', 'style': 'simple', 'explode': False }})
    word: str = field(metadata={'path_param': { 'field_name': 'word', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTagFromChannelSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteTagFromChannelRequest:
    path_params: DeleteTagFromChannelPathParams = field()
    security: DeleteTagFromChannelSecurity = field()
    

@dataclass
class DeleteTagFromChannelResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    
