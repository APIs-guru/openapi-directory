from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ContactsFetchPathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    contact_id: str = field(default=None, metadata={'path_param': { 'field_name': 'contactId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContactsFetchSecurity:
    sakari_auth: shared.SchemeSakariAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ContactsFetchRequest:
    path_params: ContactsFetchPathParams = field(default=None)
    security: ContactsFetchSecurity = field(default=None)
    

@dataclass
class ContactsFetchResponse:
    contact_response: Optional[shared.ContactResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
