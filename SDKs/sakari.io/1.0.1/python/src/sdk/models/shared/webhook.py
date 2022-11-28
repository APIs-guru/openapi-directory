from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    event_types: Optional[List[WebhookEventTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventTypes') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
