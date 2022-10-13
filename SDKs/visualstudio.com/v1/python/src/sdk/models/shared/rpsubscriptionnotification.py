from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import rpsubscriptionproperties


@dataclass_json
@dataclass
class RpSubscriptionNotification:
    properties: Optional[rpsubscriptionproperties.RpSubscriptionProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    registration_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registrationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
