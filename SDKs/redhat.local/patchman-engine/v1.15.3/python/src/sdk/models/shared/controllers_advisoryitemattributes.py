from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ControllersAdvisoryItemAttributes:
    advisory_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('advisory_type') }})
    applicable_systems: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('applicable_systems') }})
    cve_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cve_count') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    public_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_date') }})
    severity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    synopsis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('synopsis') }})
    
