from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateIndividual2:
    date_of_birth: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateOfBirth', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    national_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nationalIdentification' }})
    
