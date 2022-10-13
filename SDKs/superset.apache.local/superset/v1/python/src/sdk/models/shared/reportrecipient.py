from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import reportrecipientconfigjson

class ReportRecipientTypeEnum(str, Enum):
    EMAIL = "Email"
    SLACK = "Slack"


@dataclass_json
@dataclass
class ReportRecipient:
    recipient_config_json: Optional[reportrecipientconfigjson.ReportRecipientConfigJSON] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipient_config_json' }})
    type: ReportRecipientTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
