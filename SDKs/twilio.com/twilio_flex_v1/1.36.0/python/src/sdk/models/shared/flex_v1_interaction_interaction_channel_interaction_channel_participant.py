from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import interaction_channel_participant_enum_type_enum


@dataclass_json
@dataclass
class FlexV1InteractionInteractionChannelInteractionChannelParticipant:
    channel_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel_sid' }})
    interaction_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interaction_sid' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    type: Optional[interaction_channel_participant_enum_type_enum.InteractionChannelParticipantEnumTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
