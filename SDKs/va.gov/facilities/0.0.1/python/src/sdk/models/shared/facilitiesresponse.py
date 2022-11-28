from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FacilitiesResponse:
    links: PageLinks = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    meta: FacilitiesMetadata = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    data: Optional[List[Facility]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    
