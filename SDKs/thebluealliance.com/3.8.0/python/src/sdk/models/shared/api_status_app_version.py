from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class APIStatusAppVersion:
    latest_app_version: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('latest_app_version') }})
    min_app_version: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('min_app_version') }})
    
