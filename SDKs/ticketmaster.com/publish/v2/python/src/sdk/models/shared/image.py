from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ImageRatioEnum(str, Enum):
    ONE_HUNDRED_AND_SIXTY_NINE = "169"
    THIRTY_TWO = "32"
    FORTY_THREE = "43"


@dataclass_json
@dataclass
class Image:
    r"""Image
    Image
    """
    
    attribution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribution') }})
    domains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domains') }})
    fallback: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fallback') }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    ratio: Optional[ImageRatioEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratio') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
