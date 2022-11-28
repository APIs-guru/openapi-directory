from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Parameter:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    overridable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overridable') }})
    value: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
