from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutTransactionAccountsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutTransactionAccountsIDRequestBody:
    institution_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'institution_id' }})
    

@dataclass
class PutTransactionAccountsIDRequest:
    path_params: PutTransactionAccountsIDPathParams = field(default=None)
    request: Optional[PutTransactionAccountsIDRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutTransactionAccountsIDResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    transaction_account: Optional[shared.TransactionAccount] = field(default=None)
    
