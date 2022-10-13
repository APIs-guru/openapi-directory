from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ContactsUpdatePathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    contact_id: str = field(default=None, metadata={'path_param': { 'field_name': 'contactId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContactsUpdateSecurity:
    sakari_auth: shared.SchemeSakariAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ContactsUpdateRequest:
    path_params: ContactsUpdatePathParams = field(default=None)
    security: ContactsUpdateSecurity = field(default=None)
    

@dataclass
class ContactsUpdateResponse:
    contact_response: Optional[shared.ContactResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
