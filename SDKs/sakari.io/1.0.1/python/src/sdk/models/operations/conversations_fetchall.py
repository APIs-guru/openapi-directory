from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ConversationsFetchAllPathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConversationsFetchAllQueryParams:
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    

@dataclass
class ConversationsFetchAllSecurity:
    sakari_auth: shared.SchemeSakariAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ConversationsFetchAllRequest:
    path_params: ConversationsFetchAllPathParams = field()
    query_params: ConversationsFetchAllQueryParams = field()
    security: ConversationsFetchAllSecurity = field()
    

@dataclass
class ConversationsFetchAllResponse:
    content_type: str = field()
    status_code: int = field()
    conversations_response: Optional[shared.ConversationsResponse] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
