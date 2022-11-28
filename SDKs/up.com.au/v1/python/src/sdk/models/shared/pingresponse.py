from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PingResponseMeta:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    status_emoji: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusEmoji') }})
    

@dataclass_json
@dataclass
class PingResponse:
    r"""PingResponse
    Basic ping response to verify authentication.
    
    """
    
    meta: PingResponseMeta = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    
