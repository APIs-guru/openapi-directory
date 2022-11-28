from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AnnotationLayerRestAPIPost:
    descr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('descr') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
