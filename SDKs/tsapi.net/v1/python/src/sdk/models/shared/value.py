from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ValueLabel:
    alt_labels: Optional[List[AltLabel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('altLabels') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

@dataclass_json
@dataclass
class Value:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    ident: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ident') }})
    label: Optional[ValueLabel] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    
