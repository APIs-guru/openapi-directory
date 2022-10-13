from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sentiment
from . import topic


@dataclass_json
@dataclass
class TopicSentiment:
    sentence: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentence' }})
    sentiment: Optional[sentiment.Sentiment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentiment' }})
    topic: Optional[topic.Topic] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic' }})
    
