from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BankTransferCancelRequest:
    r"""BankTransferCancelRequest
    BankTransferCancelRequest defines the request schema for `/bank_transfer/cancel`
    """
    
    bank_transfer_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('bank_transfer_id') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
