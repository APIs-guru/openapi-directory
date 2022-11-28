from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Pagination:
    current_page: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('current_page') }})
    per_page: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('per_page') }})
    total_entries: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_entries') }})
    total_pages: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_pages') }})
    
