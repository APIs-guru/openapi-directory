from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AuthenticationTokenResponseData:
    token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('token') }})
    

@dataclass_json
@dataclass
class AuthenticationTokenResponse:
    data: AuthenticationTokenResponseData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    success: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
