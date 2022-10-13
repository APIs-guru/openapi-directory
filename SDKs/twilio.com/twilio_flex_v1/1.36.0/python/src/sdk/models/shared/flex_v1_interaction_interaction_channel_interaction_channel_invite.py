from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class FlexV1InteractionInteractionChannelInteractionChannelInvite:
    channel_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel_sid' }})
    interaction_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interaction_sid' }})
    routing: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routing' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
