from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import accountsgetrequestoptions


@dataclass_json
@dataclass
class AccountsGetRequest:
    access_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access_token' }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_id' }})
    options: Optional[accountsgetrequestoptions.AccountsGetRequestOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    
