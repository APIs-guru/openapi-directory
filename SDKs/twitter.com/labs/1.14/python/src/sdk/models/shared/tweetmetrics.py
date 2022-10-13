from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import tweetinteractionmetrics
from . import videometrics


@dataclass_json
@dataclass
class TweetMetrics:
    tweet: tweetinteractionmetrics.TweetInteractionMetrics = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tweet' }})
    tweet_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tweet_id' }})
    video: Optional[videometrics.VideoMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'video' }})
    
