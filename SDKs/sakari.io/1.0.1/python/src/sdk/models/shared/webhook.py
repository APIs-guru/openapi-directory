from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class WebhookEventTypesEnum(str, Enum):
    MESSAGE_RECEIVED = "message-received"
    MESSAGE_STATUS = "message-status"
    MESSAGE_SENT = "message-sent"
    CONVERSATION_CLOSED = "conversation-closed"
    CONTACT_CREATED = "contact-created"
    CONTACT_UPDATED = "contact-updated"
    CONTACT_REMOVED = "contact-removed"


@dataclass_json
@dataclass
class Webhook:
    event_types: Optional[List[WebhookEventTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventTypes' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
