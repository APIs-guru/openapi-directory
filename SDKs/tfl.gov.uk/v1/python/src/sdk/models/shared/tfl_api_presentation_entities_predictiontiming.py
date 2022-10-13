from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesPredictionTiming:
    countdown_server_adjustment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countdownServerAdjustment' }})
    insert: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'insert', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    read: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'read', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    received: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'received', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sent: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sent', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    source: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
