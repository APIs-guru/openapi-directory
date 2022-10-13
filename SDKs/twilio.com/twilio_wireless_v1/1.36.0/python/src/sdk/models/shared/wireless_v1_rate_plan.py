from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WirelessV1RatePlan:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    data_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data_enabled' }})
    data_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data_limit' }})
    data_metering: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data_metering' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendly_name' }})
    international_roaming: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'international_roaming' }})
    international_roaming_data_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'international_roaming_data_limit' }})
    messaging_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messaging_enabled' }})
    national_roaming_data_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'national_roaming_data_limit' }})
    national_roaming_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'national_roaming_enabled' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    unique_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unique_name' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    voice_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voice_enabled' }})
    
