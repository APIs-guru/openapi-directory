from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WebhookBaseInfo:
    external_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalAddress') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    team_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teamId') }})
    
