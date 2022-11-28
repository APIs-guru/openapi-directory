from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ChartEntityResponseSchema:
    cache_timeout: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cache_timeout') }})
    changed_on: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('changed_on') }})
    datasource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasource') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    description_markeddown: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description_markeddown') }})
    form_data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('form_data') }})
    modified: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('modified') }})
    slice_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slice_id') }})
    slice_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slice_name') }})
    slice_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slice_url') }})
    
