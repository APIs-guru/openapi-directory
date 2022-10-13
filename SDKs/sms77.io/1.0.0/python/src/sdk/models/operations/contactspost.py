from dataclasses import dataclass, field
from typing import Enum,Optional

class ContactsPostActionEnum(str, Enum):
    DEL = "del"
    WRITE = "write"


@dataclass
class ContactsPostQueryParams:
    action: ContactsPostActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'action', 'style': 'form', 'explode': True }})
    email: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    empfaenger: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'empfaenger', 'style': 'form', 'explode': True }})
    id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    json: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'json', 'style': 'form', 'explode': True }})
    nick: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nick', 'style': 'form', 'explode': True }})
    

@dataclass
class ContactsPostRequest:
    query_params: ContactsPostQueryParams = field(default=None)
    

@dataclass
class ContactsPostResponse:
    body: bytes = field(default=None)
    contacts_post_200_application_json_string: Optional[str] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
