from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TopicSentimentOutput:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('language') }})
    sentiments: Optional[List[Sentiment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sentiments') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    topic_sentiments: Optional[List[TopicSentiment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topicSentiments') }})
    topics: Optional[List[Topic]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topics') }})
    
