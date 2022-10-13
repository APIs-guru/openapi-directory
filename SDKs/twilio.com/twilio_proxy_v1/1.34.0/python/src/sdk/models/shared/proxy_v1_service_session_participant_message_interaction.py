from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass_json
@dataclass
class ProxyV1ServiceSessionParticipantMessageInteraction:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    inbound_participant_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inbound_participant_sid' }})
    inbound_resource_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inbound_resource_sid' }})
    inbound_resource_status: Optional[shared.MessageInteractionEnumResourceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inbound_resource_status' }})
    inbound_resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inbound_resource_type' }})
    inbound_resource_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inbound_resource_url' }})
    outbound_participant_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outbound_participant_sid' }})
    outbound_resource_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outbound_resource_sid' }})
    outbound_resource_status: Optional[shared.MessageInteractionEnumResourceStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outbound_resource_status' }})
    outbound_resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outbound_resource_type' }})
    outbound_resource_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outbound_resource_url' }})
    participant_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'participant_sid' }})
    service_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_sid' }})
    session_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'session_sid' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    type: Optional[shared.MessageInteractionEnumTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
