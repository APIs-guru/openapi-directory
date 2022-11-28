from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class OverviewEvent:
    acknowledged_alerts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acknowledgedAlerts') }})
    alert_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alertId') }})
    category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('categoryId') }})
    closed_alerts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('closedAlerts') }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_source_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventSourceType') }})
    event_status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventStatus') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastModified'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    severity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    team_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('teamId') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
