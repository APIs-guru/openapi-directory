from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class TwitterHandleEnum(str, Enum):
    AT_A_TWITTER_HANDLE = "@a Twitter handle"


@dataclass_json
@dataclass
class Twitter:
    handle: Optional[TwitterHandleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'handle' }})
    hashtags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hashtags' }})
    
