from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import userforapicontract
from . import userforapicontract

class UserMessageContractInboxEnum(str, Enum):
    NOTHING = "Nothing"
    RECEIVED = "Received"
    SENT = "Sent"
    NOTIFICATIONS = "Notifications"


@dataclass_json
@dataclass
class UserMessageContract:
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    created_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdFormatted' }})
    high_priority: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'highPriority' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    inbox: Optional[UserMessageContractInboxEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inbox' }})
    read: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'read' }})
    receiver: Optional[userforapicontract.UserForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receiver' }})
    sender: Optional[userforapicontract.UserForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sender' }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subject' }})
    
