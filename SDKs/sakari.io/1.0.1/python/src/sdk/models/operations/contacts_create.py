from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class ContactsCreatePathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    
class ContactsCreateMergeStrategyEnum(str, Enum):
    APPEND = "append"
    CORE = "core"
    REMOVE = "remove"


@dataclass
class ContactsCreateQueryParams:
    merge_strategy: Optional[ContactsCreateMergeStrategyEnum] = field(default=None, metadata={'query_param': { 'field_name': 'mergeStrategy', 'style': 'form', 'explode': True }})
    

@dataclass
class ContactsCreateRequests:
    contact_request: Optional[shared.ContactRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    string: Optional[str] = field(default=None, metadata={'request': { 'media_type': 'text/csv' }})
    

@dataclass
class ContactsCreateSecurity:
    sakari_auth: shared.SchemeSakariAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ContactsCreateRequest:
    path_params: ContactsCreatePathParams = field(default=None)
    query_params: ContactsCreateQueryParams = field(default=None)
    request: Optional[ContactsCreateRequests] = field(default=None)
    security: ContactsCreateSecurity = field(default=None)
    

@dataclass
class ContactsCreateResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    contacts_create_201_application_json_one_of: Optional[Any] = field(default=None)
    
