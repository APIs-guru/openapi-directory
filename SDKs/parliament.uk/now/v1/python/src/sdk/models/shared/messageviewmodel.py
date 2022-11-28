from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class MessageViewModelAnnunciatorTypeEnum(str, Enum):
    COMMONS_MAIN = "CommonsMain"
    LORDS_MAIN = "LordsMain"
    SECURITY = "Security"


@dataclass_json
@dataclass
class MessageViewModel:
    annunciator_type: Optional[MessageViewModelAnnunciatorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annunciatorType') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_security_override: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSecurityOverride') }})
    publish_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publishTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    scrolling_messages: Optional[List[ScrollingMessageViewModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scrollingMessages') }})
    show_commons_bell: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showCommonsBell') }})
    show_lords_bell: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('showLordsBell') }})
    slides: Optional[List[SlideViewModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slides') }})
    
