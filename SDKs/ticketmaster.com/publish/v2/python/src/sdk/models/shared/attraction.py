from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AttractionTypeEnum(str, Enum):
    EVENT = "event"
    VENUE = "venue"
    ATTRACTION = "attraction"


@dataclass_json
@dataclass
class Attraction:
    r"""Attraction
    Attraction
    """
    
    type: AttractionTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    additional_infos: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalInfos') }})
    classifications: Optional[List[Classification]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classifications') }})
    descriptions: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('descriptions') }})
    discoverable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discoverable') }})
    images: Optional[List[Image]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    names: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('names') }})
    references: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('references') }})
    relationships: Optional[List[dict[str, Any]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    source: Optional[Source] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    test: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('test') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
