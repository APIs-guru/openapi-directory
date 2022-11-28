from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ChannelPriceInfo:
    sms_per_message: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smsPerMessage') }})
    voice_per_minute: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voicePerMinute') }})
    
