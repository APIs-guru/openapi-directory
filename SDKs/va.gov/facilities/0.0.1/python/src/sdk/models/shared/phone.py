from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Phone:
    after_hours: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('after_hours') }})
    enrollment_coordinator: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enrollment_coordinator') }})
    fax: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fax') }})
    main: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('main') }})
    mental_health_clinic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mental_health_clinic') }})
    patient_advocate: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('patient_advocate') }})
    pharmacy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pharmacy') }})
    
