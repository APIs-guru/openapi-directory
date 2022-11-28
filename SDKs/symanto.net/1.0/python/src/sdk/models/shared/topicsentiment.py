from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TopicSentiment:
    sentence: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentence') }})
    sentiment: Optional[Sentiment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentiment') }})
    topic: Optional[Topic] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    
