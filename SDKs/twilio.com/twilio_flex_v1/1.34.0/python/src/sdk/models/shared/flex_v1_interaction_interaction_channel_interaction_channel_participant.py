from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class FlexV1InteractionInteractionChannelInteractionChannelParticipant:
    channel_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel_sid' }})
    interaction_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interaction_sid' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    type: Optional[shared.InteractionChannelParticipantEnumTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
