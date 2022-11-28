from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TagInstanceEmbedded:
    show: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show') }})
    

@dataclass_json
@dataclass
class TagInstance:
    embedded: Optional[TagInstanceEmbedded] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_embedded') }})
    show_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_id') }})
    
