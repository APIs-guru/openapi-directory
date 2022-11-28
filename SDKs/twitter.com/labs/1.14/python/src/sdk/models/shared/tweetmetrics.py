from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TweetMetrics:
    r"""TweetMetrics
    Metrics for a Tweet.
    """
    
    tweet: TweetInteractionMetrics = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tweet') }})
    tweet_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('tweet_id') }})
    video: Optional[VideoMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('video') }})
    
