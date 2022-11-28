from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TokenRequest:
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    client_secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_secret') }})
    grant_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('grant_type') }})
    
