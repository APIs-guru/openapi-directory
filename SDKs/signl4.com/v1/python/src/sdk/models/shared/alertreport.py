from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import alertcounts
from . import alertcounts
from . import alertcounts
from . import alertcounts


@dataclass_json
@dataclass
class AlertReport:
    last24_hours: Optional[alertcounts.AlertCounts] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last24Hours' }})
    subscription_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptionId' }})
    team_current_duty: Optional[alertcounts.AlertCounts] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teamCurrentDuty' }})
    team_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teamId' }})
    team_last_duty: Optional[alertcounts.AlertCounts] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teamLastDuty' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    user_last_duty_change: Optional[alertcounts.AlertCounts] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userLastDutyChange' }})
    
