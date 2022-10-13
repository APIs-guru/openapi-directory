from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    channel: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel' }})
    date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    file: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'file' }})
    type: WebcastTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
