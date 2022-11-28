from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Conversation:
    closed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closed') }})
    contact: Optional[ContactIdentifiers] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact') }})
    created: Optional[Updated] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_message: Optional[Message] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastMessage') }})
    phone_number: Optional[PhoneNumber] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    unread: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unread') }})
    updated: Optional[Updated] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated') }})
    
