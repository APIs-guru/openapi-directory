from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PayorBrandingResponse:
    logo_url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logoUrl') }})
    payor_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('payorName') }})
    collective_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collectiveAlias') }})
    dba_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dbaName') }})
    support_contact: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('supportContact') }})
    
