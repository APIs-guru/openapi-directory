from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BankTransferMigrateAccountRequest:
    r"""BankTransferMigrateAccountRequest
    BankTransferMigrateAccountRequest defines the request schema for `/bank_transfer/migrate_account`
    """
    
    account_number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_number') }})
    account_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_type') }})
    routing_number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('routing_number') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
