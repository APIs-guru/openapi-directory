from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PreviewTrustedCommsCurrentCall:
    bg_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bg_color' }})
    caller: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caller' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    font_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'font_color' }})
    from_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'from' }})
    logo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logo' }})
    manager: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manager' }})
    reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reason' }})
    shield_img: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shield_img' }})
    sid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sid' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    use_case: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'use_case' }})
    
