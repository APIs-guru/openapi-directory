from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class V3StopStaffing:
    fri_am_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fri_am_from') }})
    fri_am_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fri_am_to') }})
    fri_pm_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fri_pm_from') }})
    fri_pm_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fri_pm_to') }})
    mon_am_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mon_am_from') }})
    mon_am_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mon_am_to') }})
    mon_pm_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mon_pm_from') }})
    mon_pm_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mon_pm_to') }})
    ph_additional_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ph_additional_text') }})
    ph_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ph_from') }})
    ph_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ph_to') }})
    sat_am_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sat_am_from') }})
    sat_am_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sat_am_to') }})
    sat_pm_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sat_pm_from') }})
    sat_pm_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sat_pm_to') }})
    sun_am_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sun_am_from') }})
    sun_am_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sun_am_to') }})
    sun_pm_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sun_pm_from') }})
    sun_pm_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sun_pm_to') }})
    thu_am_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thu_am_from') }})
    thu_am_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thu_am_to') }})
    thu_pm_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thu_pm_from') }})
    thu_pm_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thu_pm_to') }})
    tue_am_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tue_am_from') }})
    tue_am_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tue_am_to') }})
    tue_pm_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tue_pm_from') }})
    tue_pm_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tue_pm_to') }})
    wed_am_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wed_am_from') }})
    wed_am_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wed_am_to') }})
    wed_pm_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wed_pm_To') }})
    wed_pm_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wed_pm_from') }})
    
