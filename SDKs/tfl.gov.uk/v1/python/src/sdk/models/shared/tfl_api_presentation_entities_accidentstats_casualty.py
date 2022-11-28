from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesAccidentStatsCasualty:
    age: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('age') }})
    age_band: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ageBand') }})
    class_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('class') }})
    mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mode') }})
    severity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('severity') }})
    
