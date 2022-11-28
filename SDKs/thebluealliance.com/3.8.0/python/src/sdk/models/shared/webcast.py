from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class WebcastTypeEnum(str, Enum):
    YOUTUBE = "youtube"
    TWITCH = "twitch"
    USTREAM = "ustream"
    IFRAME = "iframe"
    HTML5 = "html5"
    RTMP = "rtmp"
    LIVESTREAM = "livestream"
    DIRECT_LINK = "direct_link"
    MMS = "mms"
    JUSTIN = "justin"
    STEMTV = "stemtv"
    DACAST = "dacast"


@dataclass_json
@dataclass
class Webcast:
    channel: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    type: WebcastTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    date_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('file') }})
    
