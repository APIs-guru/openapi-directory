from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QueuedResponse:
    r"""QueuedResponse
    The response received after a [render request](#render-asset) is submitted. The render task is queued for rendering and a unique render id is returned.
    """
    
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    response: QueuedResponseData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    success: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
