from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import service_enum_geo_match_level_enum
from . import service_enum_number_selection_behavior_enum


@dataclass_json
@dataclass
class ProxyV1Service:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    callback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'callback_url' }})
    chat_instance_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chat_instance_sid' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    default_ttl: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default_ttl' }})
    geo_match_level: Optional[service_enum_geo_match_level_enum.ServiceEnumGeoMatchLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'geo_match_level' }})
    intercept_callback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intercept_callback_url' }})
    links: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    number_selection_behavior: Optional[service_enum_number_selection_behavior_enum.ServiceEnumNumberSelectionBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number_selection_behavior' }})
    out_of_session_callback_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'out_of_session_callback_url' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    unique_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unique_name' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
