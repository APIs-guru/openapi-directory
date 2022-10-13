from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import v3_disruptionroute
from . import v3_disruptionstop


@dataclass_json
@dataclass
class V3Disruption:
    colour: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colour' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_on_board: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_on_board' }})
    display_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_status' }})
    disruption_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disruption_id' }})
    disruption_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disruption_status' }})
    disruption_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disruption_type' }})
    from_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    published_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'published_on', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    routes: Optional[List[v3_disruptionroute.V3DisruptionRoute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routes' }})
    stops: Optional[List[v3_disruptionstop.V3DisruptionStop]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stops' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    to_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
