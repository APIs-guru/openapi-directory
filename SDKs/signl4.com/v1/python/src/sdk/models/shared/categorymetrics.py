from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CategoryMetrics:
    category_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categoryId' }})
    last24_hours: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last24Hours' }})
    last_alert: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastAlert', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    subscriber_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriberCount' }})
    
