from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import alerthistoryinfoentry


@dataclass_json
@dataclass
class AlertHistoryInfoDetailed:
    acknowledged: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acknowledged', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    acknowledgedgements: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acknowledgedgements' }})
    closed: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closed', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    closed_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'closedBy' }})
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    history_entries: Optional[List[alerthistoryinfoentry.AlertHistoryInfoEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'historyEntries' }})
    
