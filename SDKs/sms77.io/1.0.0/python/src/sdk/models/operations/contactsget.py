from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class ContactsGetActionEnum(str, Enum):
    READ = "read"


@dataclass
class ContactsGetQueryParams:
    action: ContactsGetActionEnum = field(metadata={'query_param': { 'field_name': 'action', 'style': 'form', 'explode': True }})
    json: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'json', 'style': 'form', 'explode': True }})
    

@dataclass
class ContactsGetRequest:
    query_params: ContactsGetQueryParams = field()
    

@dataclass
class ContactsGetResponse:
    content_type: str = field()
    status_code: int = field()
    contacts_get_200_application_json_string: Optional[str] = field(default=None)
    contacts_get_200_text_csv_string: Optional[str] = field(default=None)
    
