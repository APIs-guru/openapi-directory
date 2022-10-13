from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import achdetails
from . import error


@dataclass_json
@dataclass
class BankAccountPaymentDetails:
    account_ownership_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_ownership_type' }})
    ach_details: Optional[achdetails.AchDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ach_details' }})
    bank_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bank_name' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    errors: Optional[List[error.Error]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    fingerprint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fingerprint' }})
    statement_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statement_description' }})
    transfer_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transfer_type' }})
    
