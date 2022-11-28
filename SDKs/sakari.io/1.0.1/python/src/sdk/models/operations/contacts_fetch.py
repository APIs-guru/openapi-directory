from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ContactsFetchPathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    contact_id: str = field(metadata={'path_param': { 'field_name': 'contactId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContactsFetchSecurity:
    sakari_auth: shared.SchemeSakariAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ContactsFetchRequest:
    path_params: ContactsFetchPathParams = field()
    security: ContactsFetchSecurity = field()
    

@dataclass
class ContactsFetchResponse:
    content_type: str = field()
    status_code: int = field()
    contact_response: Optional[shared.ContactResponse] = field(default=None)
    
