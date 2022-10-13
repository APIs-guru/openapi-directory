from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MessagesFetchAllPathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class MessagesFetchAllQueryParams:
    contact_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'contactId', 'style': 'form', 'explode': True }})
    conversation_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'conversationId', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class MessagesFetchAllSecurity:
    sakari_auth: shared.SchemeSakariAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class MessagesFetchAllRequest:
    path_params: MessagesFetchAllPathParams = field(default=None)
    query_params: MessagesFetchAllQueryParams = field(default=None)
    security: MessagesFetchAllSecurity = field(default=None)
    

@dataclass
class MessagesFetchAllResponse:
    content_type: str = field(default=None)
    messages_response: Optional[shared.MessagesResponse] = field(default=None)
    status_code: int = field(default=None)
    
