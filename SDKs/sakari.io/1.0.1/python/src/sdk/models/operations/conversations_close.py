from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ConversationsClosePathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    conversation_id: str = field(metadata={'path_param': { 'field_name': 'conversationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConversationsCloseSecurity:
    sakari_auth: shared.SchemeSakariAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ConversationsCloseRequest:
    path_params: ConversationsClosePathParams = field()
    security: ConversationsCloseSecurity = field()
    

@dataclass
class ConversationsCloseResponse:
    content_type: str = field()
    status_code: int = field()
    conversation_response: Optional[shared.ConversationResponse] = field(default=None)
    
