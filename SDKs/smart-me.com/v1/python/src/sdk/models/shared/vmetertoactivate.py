from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VMeterToActivate:
    r"""VMeterToActivate
    Actives a virtual Meter
    """
    
    serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SerialNumber') }, 'form': { 'field_name': 'SerialNumber' }})
    
