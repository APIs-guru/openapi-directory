from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Error:
    developer_message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('developer_message') }})
    error: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    error_code: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_code') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    
