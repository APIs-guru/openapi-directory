from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CustomPage:
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    body: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body') }})
    hidden: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hidden') }})
    html: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('html') }})
    htmlmode: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('htmlmode') }})
    
