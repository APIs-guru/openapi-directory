from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AlertReport:
    last24_hours: Optional[AlertCounts] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('last24Hours') }})
    subscription_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionId') }})
    team_current_duty: Optional[AlertCounts] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teamCurrentDuty') }})
    team_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teamId') }})
    team_last_duty: Optional[AlertCounts] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teamLastDuty') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    user_last_duty_change: Optional[AlertCounts] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLastDutyChange') }})
    
