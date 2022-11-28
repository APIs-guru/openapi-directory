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
class MessageConversation:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class MessageMedia:
    filename: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filename') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    

@dataclass_json
@dataclass
class Message:
    contact: Optional[ContactIdentifiers] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact') }})
    conversation: Optional[MessageConversation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversation') }})
    created: Optional[Updated] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    error: Optional[Error] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    media: Optional[List[MessageMedia]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('media') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    outgoing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outgoing') }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    price: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    read: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('read') }})
    segments: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segments') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    updated: Optional[Updated] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated') }})
    
