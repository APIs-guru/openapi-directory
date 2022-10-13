from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import environmentbillinginfo


@dataclass_json
@dataclass
class EnvironmentStateChange:
    environment: Optional[environmentbillinginfo.EnvironmentBillingInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'environment' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    new_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newValue' }})
    old_value: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oldValue' }})
    partition_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partitionKey' }})
    time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
