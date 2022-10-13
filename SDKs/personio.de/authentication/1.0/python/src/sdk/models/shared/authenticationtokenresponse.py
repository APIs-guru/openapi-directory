from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AuthenticationTokenResponseData:
    token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    

@dataclass_json
@dataclass
class AuthenticationTokenResponse:
    data: AuthenticationTokenResponseData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    success: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'success' }})
    
