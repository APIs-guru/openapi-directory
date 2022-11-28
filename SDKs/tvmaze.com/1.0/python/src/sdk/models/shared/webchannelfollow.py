from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WebchannelFollowEmbedded:
    webchannel: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webchannel') }})
    

@dataclass_json
@dataclass
class WebchannelFollow:
    embedded: Optional[WebchannelFollowEmbedded] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_embedded') }})
    webchannel_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webchannel_id') }})
    
