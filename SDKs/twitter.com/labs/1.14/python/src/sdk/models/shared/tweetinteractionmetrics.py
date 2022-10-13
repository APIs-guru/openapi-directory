from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TweetInteractionMetrics:
    impression_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'impression_count' }})
    like_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'like_count' }})
    quote_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quote_count' }})
    reply_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reply_count' }})
    retweet_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retweet_count' }})
    
