from dataclasses import dataclass, field
from typing import List


@dataclass
class UserAPIDeleteMessagesPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UserAPIDeleteMessagesQueryParams:
    message_id: List[int] = field(default=None, metadata={'query_param': { 'field_name': 'messageId', 'style': 'form', 'explode': True }})
    

@dataclass
class UserAPIDeleteMessagesRequest:
    path_params: UserAPIDeleteMessagesPathParams = field(default=None)
    query_params: UserAPIDeleteMessagesQueryParams = field(default=None)
    

@dataclass
class UserAPIDeleteMessagesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
