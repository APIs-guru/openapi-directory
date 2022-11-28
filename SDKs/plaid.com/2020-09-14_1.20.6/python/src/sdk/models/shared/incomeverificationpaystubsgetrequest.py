from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IncomeVerificationPaystubsGetRequest:
    r"""IncomeVerificationPaystubsGetRequest
    IncomeVerificationPaystubsGetRequest defines the request schema for `/income/verification/paystubs/get`.
    """
    
    income_verification_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('income_verification_id') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
