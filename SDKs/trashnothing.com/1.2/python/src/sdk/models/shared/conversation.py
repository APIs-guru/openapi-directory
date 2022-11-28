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
    r"""Conversation
    A conversation between the current user and another user.
    """
    
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived') }})
    blocked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blocked') }})
    conversation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversation_id') }})
    last_message_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_message_date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    messages: Optional[List[Message]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    num_unread_messages: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('num_unread_messages') }})
    user: Optional[User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    
