from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sentiment
from . import topicsentiment
from . import topic


@dataclass_json
@dataclass
class TopicSentimentOutput:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    sentiments: Optional[List[sentiment.Sentiment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sentiments' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    topic_sentiments: Optional[List[topicsentiment.TopicSentiment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topicSentiments' }})
    topics: Optional[List[topic.Topic]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topics' }})
    
