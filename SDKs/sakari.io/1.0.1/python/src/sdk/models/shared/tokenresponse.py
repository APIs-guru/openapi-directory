from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TokenResponse:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_token') }})
    token_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('token_type') }})
    
