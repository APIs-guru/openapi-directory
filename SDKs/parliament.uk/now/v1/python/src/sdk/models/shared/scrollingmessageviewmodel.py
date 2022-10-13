from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ScrollingMessageViewModelAlertTypeEnum(str, Enum):
    STANDARD = "Standard"
    SECONDARY_CHAMBER = "SecondaryChamber"
    ALERT = "Alert"
    SECURITY_NORMAL = "SecurityNormal"
    SECURITY_HIGH = "SecurityHigh"

class ScrollingMessageViewModelVerticalAlignmentEnum(str, Enum):
    TOP = "Top"
    MIDDLE = "Middle"
    BOTTOM = "Bottom"


@dataclass_json
@dataclass
class ScrollingMessageViewModel:
    alert_type: Optional[ScrollingMessageViewModelAlertTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alertType' }})
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    display_from: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayFrom', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    display_to: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayTo', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    vertical_alignment: Optional[ScrollingMessageViewModelVerticalAlignmentEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verticalAlignment' }})
    
