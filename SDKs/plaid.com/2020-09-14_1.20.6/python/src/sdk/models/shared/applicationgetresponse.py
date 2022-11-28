from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ApplicationGetResponse:
    r"""ApplicationGetResponse
    The request ID associated with this call.
    """
    
    application: Application = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('application') }})
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('request_id') }})
    
