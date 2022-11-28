from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PreviewUnderstandAssistantTaskTaskStatistics:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    assistant_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assistant_sid') }})
    fields_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields_count') }})
    samples_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('samples_count') }})
    task_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('task_sid') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
