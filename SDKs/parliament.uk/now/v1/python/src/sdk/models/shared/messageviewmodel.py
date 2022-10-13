from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import scrollingmessageviewmodel
from . import slideviewmodel

class MessageViewModelAnnunciatorTypeEnum(str, Enum):
    COMMONS_MAIN = "CommonsMain"
    LORDS_MAIN = "LordsMain"
    SECURITY = "Security"


@dataclass_json
@dataclass
class MessageViewModel:
    annunciator_type: Optional[MessageViewModelAnnunciatorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annunciatorType' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_security_override: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSecurityOverride' }})
    publish_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    scrolling_messages: Optional[List[scrollingmessageviewmodel.ScrollingMessageViewModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scrollingMessages' }})
    show_commons_bell: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showCommonsBell' }})
    show_lords_bell: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'showLordsBell' }})
    slides: Optional[List[slideviewmodel.SlideViewModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slides' }})
    
