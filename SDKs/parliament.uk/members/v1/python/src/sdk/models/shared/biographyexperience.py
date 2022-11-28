from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BiographyExperience:
    end_month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endMonth') }})
    end_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endYear') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    organisation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organisation') }})
    start_month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startMonth') }})
    start_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startYear') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    type_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeId') }})
    
