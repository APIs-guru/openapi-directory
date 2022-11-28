from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ChatV2ServiceUserUserChannel:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    channel_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel_sid') }})
    last_consumed_message_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last_consumed_message_index') }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    member_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('member_sid') }})
    notification_level: Optional[UserChannelEnumNotificationLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notification_level') }})
    service_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service_sid') }})
    status: Optional[UserChannelEnumChannelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    unread_messages_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unread_messages_count') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    user_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_sid') }})
    
