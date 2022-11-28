from dataclasses import dataclass, field
from typing import List


@dataclass
class UserAPIDeleteMessagesPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UserAPIDeleteMessagesQueryParams:
    message_id: List[int] = field(metadata={'query_param': { 'field_name': 'messageId', 'style': 'form', 'explode': True }})
    

@dataclass
class UserAPIDeleteMessagesRequest:
    path_params: UserAPIDeleteMessagesPathParams = field()
    query_params: UserAPIDeleteMessagesQueryParams = field()
    

@dataclass
class UserAPIDeleteMessagesResponse:
    content_type: str = field()
    status_code: int = field()
    
