from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ShotstackDestination:
    r"""ShotstackDestination
    Send rendered assets to the Shotstack hosting and CDN service. This destination is enabled by default.
    """
    
    provider: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('provider') }})
    exclude: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclude') }})
    
