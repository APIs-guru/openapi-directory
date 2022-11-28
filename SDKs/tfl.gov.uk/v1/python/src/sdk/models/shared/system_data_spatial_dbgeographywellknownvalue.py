from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SystemDataSpatialDbGeographyWellKnownValue:
    coordinate_system_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coordinateSystemId') }})
    well_known_binary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wellKnownBinary') }})
    well_known_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wellKnownText') }})
    
