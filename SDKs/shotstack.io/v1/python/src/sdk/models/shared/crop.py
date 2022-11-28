from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Crop:
    r"""Crop
    Crop the sides of an asset by a relative amount. The size of the crop is specified using a scale between 0 and 1, relative to the screen width - i.e a left crop of 0.5 will crop half of the asset from the left, a top crop  of 0.25 will crop the top by quarter of the asset.
    """
    
    bottom: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bottom') }})
    left: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('left') }})
    right: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('right') }})
    top: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('top') }})
    
