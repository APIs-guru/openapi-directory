from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class ImageRatioEnum(str, Enum):
    ONE_HUNDRED_AND_SIXTY_NINE = "169"
    THIRTY_TWO = "32"
    FORTY_THREE = "43"


@dataclass_json
@dataclass
class Image:
    attribution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attribution' }})
    domains: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domains' }})
    fallback: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fallback' }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    ratio: Optional[ImageRatioEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ratio' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
