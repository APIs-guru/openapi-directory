from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Meta:
    r"""Meta
    JSON API-compliant object containing metadata about this response
    """
    
    band_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('band_version') }})
    
