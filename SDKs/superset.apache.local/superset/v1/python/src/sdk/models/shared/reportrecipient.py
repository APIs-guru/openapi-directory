from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ReportRecipientTypeEnum(str, Enum):
    EMAIL = "Email"
    SLACK = "Slack"


@dataclass_json
@dataclass
class ReportRecipient:
    type: ReportRecipientTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    recipient_config_json: Optional[ReportRecipientConfigJSON] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipient_config_json') }})
    
