from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class UserAPIGetMessagesPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class UserAPIGetMessagesInboxEnum(str, Enum):
    NOTHING = "Nothing"
    RECEIVED = "Received"
    SENT = "Sent"
    NOTIFICATIONS = "Notifications"


@dataclass
class UserAPIGetMessagesQueryParams:
    another_user_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'anotherUserId', 'style': 'form', 'explode': True }})
    get_total_count: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'getTotalCount', 'style': 'form', 'explode': True }})
    inbox: Optional[UserAPIGetMessagesInboxEnum] = field(default=None, metadata={'query_param': { 'field_name': 'inbox', 'style': 'form', 'explode': True }})
    max_results: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    unread: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'unread', 'style': 'form', 'explode': True }})
    

@dataclass
class UserAPIGetMessagesRequest:
    path_params: UserAPIGetMessagesPathParams = field(default=None)
    query_params: UserAPIGetMessagesQueryParams = field(default=None)
    

@dataclass
class UserAPIGetMessagesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    partial_find_result_user_message_contract_: Optional[shared.PartialFindResultUserMessageContract] = field(default=None)
    status_code: int = field(default=None)
    
