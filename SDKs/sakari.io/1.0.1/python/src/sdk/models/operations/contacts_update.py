from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ContactsUpdatePathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    contact_id: str = field(metadata={'path_param': { 'field_name': 'contactId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContactsUpdateSecurity:
    sakari_auth: shared.SchemeSakariAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ContactsUpdateRequest:
    path_params: ContactsUpdatePathParams = field()
    security: ContactsUpdateSecurity = field()
    

@dataclass
class ContactsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    contact_response: Optional[shared.ContactResponse] = field(default=None)
    
