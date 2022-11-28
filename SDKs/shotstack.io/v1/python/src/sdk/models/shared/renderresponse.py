from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RenderResponse:
    r"""RenderResponse
    The response received after a [render status request](#get-render-status) is submitted. The response includes  details about status of a render and the output URL.
    """
    
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    response: RenderResponseData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('response') }})
    success: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    
