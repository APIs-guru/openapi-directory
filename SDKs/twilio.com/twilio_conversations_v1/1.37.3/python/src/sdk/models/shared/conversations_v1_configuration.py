from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ConversationsV1Configuration:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    default_chat_service_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_chat_service_sid') }})
    default_closed_timer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_closed_timer') }})
    default_inactive_timer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_inactive_timer') }})
    default_messaging_service_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('default_messaging_service_sid') }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
