from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ContactsRemovePathParams:
    account_id: str = field(metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    contact_id: str = field(metadata={'path_param': { 'field_name': 'contactId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContactsRemoveSecurity:
    sakari_auth: shared.SchemeSakariAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass_json
@dataclass
class ContactsRemove200ApplicationJSON:
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    

@dataclass
class ContactsRemoveRequest:
    path_params: ContactsRemovePathParams = field()
    security: ContactsRemoveSecurity = field()
    

@dataclass
class ContactsRemoveResponse:
    content_type: str = field()
    status_code: int = field()
    contacts_remove_200_application_json_object: Optional[ContactsRemove200ApplicationJSON] = field(default=None)
    
