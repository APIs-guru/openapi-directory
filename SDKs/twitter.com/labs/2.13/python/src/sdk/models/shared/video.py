from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class VideoNonPublicMetrics:
    r"""VideoNonPublicMetrics
    Nonpublic engagement metrics for the Media at the time of the request.
    """
    
    playback_0_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playback_0_count') }})
    playback_100_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playback_100_count') }})
    playback_25_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playback_25_count') }})
    playback_50_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playback_50_count') }})
    playback_75_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playback_75_count') }})
    

@dataclass_json
@dataclass
class VideoOrganicMetrics:
    r"""VideoOrganicMetrics
    Organic nonpublic engagement metrics for the Media at the time of the request.
    """
    
    playback_0_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playback_0_count') }})
    playback_100_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playback_100_count') }})
    playback_25_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playback_25_count') }})
    playback_50_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playback_50_count') }})
    playback_75_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playback_75_count') }})
    view_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view_count') }})
    

@dataclass_json
@dataclass
class VideoPromotedMetrics:
    r"""VideoPromotedMetrics
    Promoted nonpublic engagement metrics for the Media at the time of the request.
    """
    
    playback_0_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playback_0_count') }})
    playback_100_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playback_100_count') }})
    playback_25_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playback_25_count') }})
    playback_50_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playback_50_count') }})
    playback_75_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playback_75_count') }})
    view_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view_count') }})
    

@dataclass_json
@dataclass
class VideoPublicMetrics:
    r"""VideoPublicMetrics
    Engagement metrics for the Media at the time of the request.
    """
    
    view_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('view_count') }})
    
class VideoTypeEnum(str, Enum):
    VIDEO = "video"


@dataclass_json
@dataclass
class Video:
    duration_ms: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration_ms') }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    media_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('media_key') }})
    non_public_metrics: Optional[VideoNonPublicMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('non_public_metrics') }})
    organic_metrics: Optional[VideoOrganicMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('organic_metrics') }})
    preview_image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preview_image_url') }})
    promoted_metrics: Optional[VideoPromotedMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promoted_metrics') }})
    public_metrics: Optional[VideoPublicMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('public_metrics') }})
    type: Optional[VideoTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    width: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('width') }})
    
