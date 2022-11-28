from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class TwitterHandleEnum(str, Enum):
    AT_A_TWITTER_HANDLE = "@a Twitter handle"


@dataclass_json
@dataclass
class Twitter:
    r"""Twitter
    Twitter data
    """
    
    handle: Optional[TwitterHandleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('handle') }})
    hashtags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hashtags') }})
    
