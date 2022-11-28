from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutTransactionAccountsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutTransactionAccountsIDRequestBody:
    institution_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('institution_id') }})
    

@dataclass
class PutTransactionAccountsIDRequest:
    path_params: PutTransactionAccountsIDPathParams = field()
    request: Optional[PutTransactionAccountsIDRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutTransactionAccountsIDResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    transaction_account: Optional[shared.TransactionAccount] = field(default=None)
    
