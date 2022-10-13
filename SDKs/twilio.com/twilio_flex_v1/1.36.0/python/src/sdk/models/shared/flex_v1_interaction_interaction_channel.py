from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import interaction_channel_enum_channel_status_enum
from . import interaction_channel_enum_type_enum


@dataclass_json
@dataclass
class FlexV1InteractionInteractionChannel:
    error_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_code' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_message' }})
    interaction_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interaction_sid' }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    status: Optional[interaction_channel_enum_channel_status_enum.InteractionChannelEnumChannelStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    type: Optional[interaction_channel_enum_type_enum.InteractionChannelEnumTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
