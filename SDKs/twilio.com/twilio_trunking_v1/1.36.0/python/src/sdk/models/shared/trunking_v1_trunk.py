from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import trunk_enum_transfer_caller_id_enum
from . import trunk_enum_transfer_setting_enum

class TrunkingV1TrunkDisasterRecoveryMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass_json
@dataclass
class TrunkingV1Trunk:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    auth_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_type' }})
    auth_type_set: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth_type_set' }})
    cnam_lookup_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cnam_lookup_enabled' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    disaster_recovery_method: Optional[TrunkingV1TrunkDisasterRecoveryMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disaster_recovery_method' }})
    disaster_recovery_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disaster_recovery_url' }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain_name' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendly_name' }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    recording: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recording' }})
    secure: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secure' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    transfer_caller_id: Optional[trunk_enum_transfer_caller_id_enum.TrunkEnumTransferCallerIDEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transfer_caller_id' }})
    transfer_mode: Optional[trunk_enum_transfer_setting_enum.TrunkEnumTransferSettingEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transfer_mode' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
