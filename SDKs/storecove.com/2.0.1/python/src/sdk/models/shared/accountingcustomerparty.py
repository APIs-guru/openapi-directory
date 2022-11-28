from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccountingCustomerParty:
    r"""AccountingCustomerParty
    The customer receiving the invoice.
    """
    
    party: Party = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('party') }})
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    public_identifiers: Optional[List[PublicIdentifier]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicIdentifiers') }})
    
