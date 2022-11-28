from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IncomeVerificationRefreshResponse:
    r"""IncomeVerificationRefreshResponse
    IncomeVerificationRequestResponse defines the response schema for `/income/verification/refresh`
    """
    
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    verification_refresh_status: VerificationRefreshStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('verification_refresh_status') }})
    
