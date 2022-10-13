from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ConversationsFetchPathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    conversation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'conversationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConversationsFetchSecurity:
    sakari_auth: shared.SchemeSakariAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ConversationsFetchRequest:
    path_params: ConversationsFetchPathParams = field(default=None)
    security: ConversationsFetchSecurity = field(default=None)
    

@dataclass
class ConversationsFetchResponse:
    content_type: str = field(default=None)
    conversation_response: Optional[shared.ConversationResponse] = field(default=None)
    status_code: int = field(default=None)
    
