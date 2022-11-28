from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IncomeVerificationCreateRequest:
    r"""IncomeVerificationCreateRequest
    IncomeVerificationCreateRequest defines the request schema for `/income/verification/create`
    """
    
    webhook: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhook') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
