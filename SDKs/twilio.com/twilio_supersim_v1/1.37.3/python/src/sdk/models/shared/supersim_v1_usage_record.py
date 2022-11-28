from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SupersimV1UsageRecord:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_sid') }})
    billed_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billed_unit') }})
    data_download: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data_download') }})
    data_total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data_total') }})
    data_total_billed: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data_total_billed') }})
    data_upload: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data_upload') }})
    fleet_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fleet_sid') }})
    iso_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('iso_country') }})
    network_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network_sid') }})
    period: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    sim_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sim_sid') }})
    
