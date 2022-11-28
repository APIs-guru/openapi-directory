from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TweetInteractionMetrics:
    r"""TweetInteractionMetrics
    Interaction metrics for a Tweet.
    """
    
    like_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('like_count') }})
    quote_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('quote_count') }})
    reply_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('reply_count') }})
    retweet_count: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('retweet_count') }})
    impression_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('impression_count') }})
    
