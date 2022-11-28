from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Offset:
    r"""Offset
    Offsets the position of an asset horizontally or vertically by a relative distance.
    """
    
    x: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('x') }})
    y: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('y') }})
    
