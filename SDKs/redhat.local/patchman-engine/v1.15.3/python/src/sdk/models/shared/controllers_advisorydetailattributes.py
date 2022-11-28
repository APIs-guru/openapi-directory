from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ControllersAdvisoryDetailAttributes:
    cves: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cves') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    fixes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixes') }})
    modified_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified_date') }})
    packages: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packages') }})
    public_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_date') }})
    references: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('references') }})
    severity: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    solution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('solution') }})
    synopsis: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('synopsis') }})
    topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    
