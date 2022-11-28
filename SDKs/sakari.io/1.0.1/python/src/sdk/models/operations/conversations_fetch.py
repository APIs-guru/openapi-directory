from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ConversationsFetchPathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    conversation_id: str = field(metadata={'path_param': { 'field_name': 'conversationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConversationsFetchSecurity:
    sakari_auth: shared.SchemeSakariAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ConversationsFetchRequest:
    path_params: ConversationsFetchPathParams = field()
    security: ConversationsFetchSecurity = field()
    

@dataclass
class ConversationsFetchResponse:
    content_type: str = field()
    status_code: int = field()
    conversation_response: Optional[shared.ConversationResponse] = field(default=None)
    
