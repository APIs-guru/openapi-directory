from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FhirEncounter:
    date_: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    encounter_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encounterType') }})
    group: Optional[Group] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifier') }})
    links: Optional[List[Link]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    observations: Optional[List[FhirObservation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('observations') }})
    procedures: Optional[List[FhirProcedure]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('procedures') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
