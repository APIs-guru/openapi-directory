from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ProfileSpecifier:
    oid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oid') }})
    provider: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    tid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tid') }})
    
