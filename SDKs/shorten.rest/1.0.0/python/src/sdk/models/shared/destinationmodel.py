from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DestinationModel:
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    os: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('os') }})
    
