from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutAccountsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutAccountsIDRequestBody:
    currency_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency_code' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

@dataclass
class PutAccountsIDRequest:
    path_params: PutAccountsIDPathParams = field(default=None)
    request: Optional[PutAccountsIDRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutAccountsIDResponse:
    account: Optional[shared.Account] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
