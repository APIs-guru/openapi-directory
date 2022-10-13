from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import contactrequest


@dataclass_json
@dataclass
class SendMessagesRequestFilters:
    attributes: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

@dataclass_json
@dataclass
class SendMessagesRequestMedia:
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
class SendMessagesRequestTypeEnum(str, Enum):
    SMS = "SMS"
    MMS = "MMS"


@dataclass_json
@dataclass
class SendMessagesRequest:
    contacts: Optional[List[contactrequest.ContactRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contacts' }})
    conversation_strategy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversationStrategy' }})
    conversations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conversations' }})
    filters: Optional[SendMessagesRequestFilters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'filters' }})
    media: Optional[List[SendMessagesRequestMedia]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'media' }})
    template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template' }})
    type: Optional[SendMessagesRequestTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
