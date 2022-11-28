from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TflAPIPresentationEntitiesLineServiceType:
    line_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineName') }})
    line_specific_service_types: Optional[List[TflAPIPresentationEntitiesLineSpecificServiceType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineSpecificServiceTypes') }})
    
