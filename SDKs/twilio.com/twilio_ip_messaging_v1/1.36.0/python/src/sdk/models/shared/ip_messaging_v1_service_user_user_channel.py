from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import user_channel_enum_channel_status_enum


@dataclass_json
@dataclass
class IPMessagingV1ServiceUserUserChannel:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    channel_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel_sid' }})
    last_consumed_message_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_consumed_message_index' }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    member_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'member_sid' }})
    service_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_sid' }})
    status: Optional[user_channel_enum_channel_status_enum.UserChannelEnumChannelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    unread_messages_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unread_messages_count' }})
    
