from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import contactidentifiers
from . import updated
from . import message
from . import phonenumber
from . import updated


@dataclass_json
@dataclass
class Conversation:
    closed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closed' }})
    contact: Optional[contactidentifiers.ContactIdentifiers] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contact' }})
    created: Optional[updated.Updated] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_message: Optional[message.Message] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastMessage' }})
    phone_number: Optional[phonenumber.PhoneNumber] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneNumber' }})
    unread: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unread' }})
    updated: Optional[updated.Updated] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated' }})
    
