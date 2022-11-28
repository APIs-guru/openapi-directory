from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class UserMessageContractInboxEnum(str, Enum):
    NOTHING = "Nothing"
    RECEIVED = "Received"
    SENT = "Sent"
    NOTIFICATIONS = "Notifications"


@dataclass_json
@dataclass
class UserMessageContract:
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    created_formatted: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdFormatted') }})
    high_priority: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highPriority') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    inbox: Optional[UserMessageContractInboxEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inbox') }})
    read: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('read') }})
    receiver: Optional[UserForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('receiver') }})
    sender: Optional[UserForAPIContract] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sender') }})
    subject: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subject') }})
    
