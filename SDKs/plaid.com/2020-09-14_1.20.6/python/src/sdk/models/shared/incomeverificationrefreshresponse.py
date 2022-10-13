from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import verificationrefreshstatus_enum


@dataclass_json
@dataclass
class IncomeVerificationRefreshResponse:
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    verification_refresh_status: verificationrefreshstatus_enum.VerificationRefreshStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verification_refresh_status' }})
    
