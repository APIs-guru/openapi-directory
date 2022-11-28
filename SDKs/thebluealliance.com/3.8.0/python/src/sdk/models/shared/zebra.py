from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ZebraAlliances:
    blue: Optional[List[ZebraTeam]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blue') }})
    red: Optional[List[ZebraTeam]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('red') }})
    

@dataclass_json
@dataclass
class Zebra:
    alliances: ZebraAlliances = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alliances') }})
    key: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    times: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('times') }})
    
