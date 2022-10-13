from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class V3VehiclePosition:
    bearing: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bearing' }})
    datetime_utc: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datetime_utc', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    direction: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'direction' }})
    easting: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'easting' }})
    expiry_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiry_time', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    northing: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'northing' }})
    supplier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supplier' }})
    
