from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PayeeLocation:
    deleted: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    latitude: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    payee_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payee_id') }})
    
