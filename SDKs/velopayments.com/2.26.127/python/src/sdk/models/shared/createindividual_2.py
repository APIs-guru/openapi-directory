from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateIndividual2:
    date_of_birth: date = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateOfBirth'), 'encoder': utils.dateisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    national_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nationalIdentification') }})
    
