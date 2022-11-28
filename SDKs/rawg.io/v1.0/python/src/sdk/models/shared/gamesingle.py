from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GameSingleEsrbRatingNameEnum(str, Enum):
    EVERYONE = "Everyone"
    EVERYONE_10_PLUS_ = "Everyone 10+"
    TEEN = "Teen"
    MATURE = "Mature"
    ADULTS_ONLY = "Adults Only"
    RATING_PENDING = "Rating Pending"

class GameSingleEsrbRatingSlugEnum(str, Enum):
    EVERYONE = "everyone"
    EVERYONE_10_PLUS = "everyone-10-plus"
    TEEN = "teen"
    MATURE = "mature"
    ADULTS_ONLY = "adults-only"
    RATING_PENDING = "rating-pending"


@dataclass_json
@dataclass
class GameSingleEsrbRating:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[GameSingleEsrbRatingNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    slug: Optional[GameSingleEsrbRatingSlugEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    

@dataclass_json
@dataclass
class GameSinglePlatformsPlatform:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    

@dataclass_json
@dataclass
class GameSinglePlatformsRequirements:
    minimum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimum') }})
    recommended: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommended') }})
    

@dataclass_json
@dataclass
class GameSinglePlatforms:
    platform: Optional[GameSinglePlatformsPlatform] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    released_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('released_at') }})
    requirements: Optional[GameSinglePlatformsRequirements] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requirements') }})
    

@dataclass_json
@dataclass
class GameSingle:
    rating: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rating') }})
    achievements_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('achievements_count') }})
    added: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    added_by_status: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_by_status') }})
    additions_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additions_count') }})
    alternative_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternative_names') }})
    background_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('background_image') }})
    background_image_additional: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('background_image_additional') }})
    creators_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creators_count') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    esrb_rating: Optional[GameSingleEsrbRating] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('esrb_rating') }})
    game_series_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('game_series_count') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    metacritic: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metacritic') }})
    metacritic_platforms: Optional[List[GamePlatformMetacritic]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metacritic_platforms') }})
    metacritic_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metacritic_url') }})
    movies_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('movies_count') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    name_original: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name_original') }})
    parent_achievements_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parent_achievements_count') }})
    parents_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parents_count') }})
    platforms: Optional[List[GameSinglePlatforms]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platforms') }})
    playtime: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playtime') }})
    rating_top: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rating_top') }})
    ratings: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratings') }})
    ratings_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratings_count') }})
    reactions: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reactions') }})
    reddit_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reddit_count') }})
    reddit_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reddit_description') }})
    reddit_logo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reddit_logo') }})
    reddit_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reddit_name') }})
    reddit_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reddit_url') }})
    released: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('released'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reviews_text_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviews_text_count') }})
    screenshots_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('screenshots_count') }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    suggestions_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestions_count') }})
    tba: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tba') }})
    twitch_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('twitch_count') }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('website') }})
    youtube_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('youtube_count') }})
    
