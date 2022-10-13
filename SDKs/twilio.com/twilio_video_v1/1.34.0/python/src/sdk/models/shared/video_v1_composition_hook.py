from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class VideoV1CompositionHookStatusCallbackMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass_json
@dataclass
class VideoV1CompositionHook:
    account_sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account_sid' }})
    audio_sources: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audio_sources' }})
    audio_sources_excluded: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audio_sources_excluded' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    format: Optional[shared.CompositionHookEnumFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    friendly_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'friendly_name' }})
    resolution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolution' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    status_callback: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_callback' }})
    status_callback_method: Optional[VideoV1CompositionHookStatusCallbackMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_callback_method' }})
    trim: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trim' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    video_layout: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'video_layout' }})
    
