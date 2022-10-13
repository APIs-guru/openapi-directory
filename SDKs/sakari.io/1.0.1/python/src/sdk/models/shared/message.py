from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import contactidentifiers
from . import updated
from . import error
from . import updated


@dataclass_json
@dataclass
class MessageConversation:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class MessageMedia:
    filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filename' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

@dataclass_json
@dataclass
class Message:
    contact: Optional[contactidentifiers.ContactIdentifiers] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contact' }})
    conversation: Optional[MessageConversation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversation' }})
    created: Optional[updated.Updated] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    error: Optional[error.Error] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    media: Optional[List[MessageMedia]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'media' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    outgoing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outgoing' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneNumber' }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    read: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'read' }})
    segments: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segments' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template' }})
    updated: Optional[updated.Updated] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated' }})
    
