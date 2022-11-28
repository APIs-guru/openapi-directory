from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Individual:
    date_of_birth: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateOfBirth') }})
    name: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    national_identification: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nationalIdentification') }})
    

@dataclass_json
@dataclass
class IndividualInput:
    name: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
