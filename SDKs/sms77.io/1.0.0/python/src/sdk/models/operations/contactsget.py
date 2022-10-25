from dataclasses import dataclass, field
from typing import Enum,Optional

class ContactsGetActionEnum(str, Enum):
    READ = "read"


@dataclass
class ContactsGetQueryParams:
    action: ContactsGetActionEnum = field(default=None, metadata={'query_param': { 'field_name': 'action', 'style': 'form', 'explode': True }})
    json: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'json', 'style': 'form', 'explode': True }})
    

@dataclass
class ContactsGetRequest:
    query_params: ContactsGetQueryParams = field(default=None)
    

@dataclass
class ContactsGetResponse:
    contacts_get_200_application_json_string: Optional[str] = field(default=None)
    contacts_get_200_text_csv_string: Optional[str] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
