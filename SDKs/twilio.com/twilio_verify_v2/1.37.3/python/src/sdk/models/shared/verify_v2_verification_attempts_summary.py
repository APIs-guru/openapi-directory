from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VerifyV2VerificationAttemptsSummary:
    conversion_rate_percentage: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conversion_rate_percentage') }})
    total_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_attempts') }})
    total_converted: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_converted') }})
    total_unconverted: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_unconverted') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
