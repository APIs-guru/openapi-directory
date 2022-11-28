from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DetailedServiceEmailContact:
    r"""DetailedServiceEmailContact
    Email contact information.
    """
    
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email_address') }})
    email_label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email_label') }})
    
