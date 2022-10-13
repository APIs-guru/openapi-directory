from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import flex_flow_enum_channel_type_enum
from . import flex_flow_enum_integration_type_enum


@dataclass_json
@dataclass
class FlexV1FlexFlow:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    channel_type: Optional[flex_flow_enum_channel_type_enum.FlexFlowEnumChannelTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel_type' }})
    chat_service_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chat_service_sid' }})
    contact_identity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contact_identity' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendly_name' }})
    integration: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integration' }})
    integration_type: Optional[flex_flow_enum_integration_type_enum.FlexFlowEnumIntegrationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integration_type' }})
    janitor_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'janitor_enabled' }})
    long_lived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'long_lived' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
