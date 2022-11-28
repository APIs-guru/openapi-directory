from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PayoutPayeeV3:
    r"""PayoutPayeeV3
    Payee data associated with a payment. Either individual or company must be populated
    """
    
    payee_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payeeId') }})
    company: Optional[PayoutCompanyV3] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company') }})
    individual: Optional[PayoutIndividualV3] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('individual') }})
    
