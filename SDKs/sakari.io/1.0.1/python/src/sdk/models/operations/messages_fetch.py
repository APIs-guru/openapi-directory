from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MessagesFetchPathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    message_id: str = field(metadata={'path_param': { 'field_name': 'messageId', 'style': 'simple', 'explode': False }})
    

@dataclass
class MessagesFetchSecurity:
    sakari_auth: shared.SchemeSakariAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class MessagesFetchRequest:
    path_params: MessagesFetchPathParams = field()
    security: MessagesFetchSecurity = field()
    

@dataclass
class MessagesFetchResponse:
    content_type: str = field()
    status_code: int = field()
    message_response: Optional[shared.MessageResponse] = field(default=None)
    
