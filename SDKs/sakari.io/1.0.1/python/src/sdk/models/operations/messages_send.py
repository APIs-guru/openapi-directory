from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MessagesSendPathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class MessagesSendSecurity:
    sakari_auth: shared.SchemeSakariAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class MessagesSendRequest:
    path_params: MessagesSendPathParams = field()
    security: MessagesSendSecurity = field()
    request: Optional[shared.SendMessagesRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class MessagesSendResponse:
    content_type: str = field()
    status_code: int = field()
    send_messages_response: Optional[shared.SendMessagesResponse] = field(default=None)
    
