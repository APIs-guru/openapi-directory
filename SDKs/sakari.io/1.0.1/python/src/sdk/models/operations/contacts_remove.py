from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class ContactsRemovePathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'accountId', 'style': 'simple', 'explode': False }})
    contact_id: str = field(default=None, metadata={'path_param': { 'field_name': 'contactId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ContactsRemoveSecurity:
    sakari_auth: shared.SchemeSakariAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ContactsRemoveRequest:
    path_params: ContactsRemovePathParams = field(default=None)
    security: ContactsRemoveSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ContactsRemove200ApplicationJSON:
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    

@dataclass
class ContactsRemoveResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    contacts_remove_200_application_json_object: Optional[ContactsRemove200ApplicationJSON] = field(default=None)
    
