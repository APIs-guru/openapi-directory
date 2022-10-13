from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OverviewEvent:
    acknowledged_alerts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acknowledgedAlerts' }})
    alert_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alertId' }})
    category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryId' }})
    closed_alerts: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closedAlerts' }})
    creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_source_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventSourceType' }})
    event_status: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventStatus' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastModified', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    severity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'severity' }})
    team_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teamId' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
