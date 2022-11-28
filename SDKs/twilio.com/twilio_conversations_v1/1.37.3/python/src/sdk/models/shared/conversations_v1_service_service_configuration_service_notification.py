from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ConversationsV1ServiceServiceConfigurationServiceNotification:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    added_to_conversation: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_to_conversation') }})
    chat_service_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chat_service_sid') }})
    log_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('log_enabled') }})
    new_message: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('new_message') }})
    removed_from_conversation: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removed_from_conversation') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
