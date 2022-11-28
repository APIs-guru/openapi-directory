from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GameEsrbRatingNameEnum(str, Enum):
    EVERYONE = "Everyone"
    EVERYONE_10_PLUS_ = "Everyone 10+"
    TEEN = "Teen"
    MATURE = "Mature"
    ADULTS_ONLY = "Adults Only"
    RATING_PENDING = "Rating Pending"

class GameEsrbRatingSlugEnum(str, Enum):
    EVERYONE = "everyone"
    EVERYONE_10_PLUS = "everyone-10-plus"
    TEEN = "teen"
    MATURE = "mature"
    ADULTS_ONLY = "adults-only"
    RATING_PENDING = "rating-pending"


@dataclass_json
@dataclass
class GameEsrbRating:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[GameEsrbRatingNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    slug: Optional[GameEsrbRatingSlugEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    

@dataclass_json
@dataclass
class GamePlatformsPlatform:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    

@dataclass_json
@dataclass
class GamePlatformsRequirements:
    minimum: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimum') }})
    recommended: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recommended') }})
    

@dataclass_json
@dataclass
class GamePlatforms:
    platform: Optional[GamePlatformsPlatform] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platform') }})
    released_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('released_at') }})
    requirements: Optional[GamePlatformsRequirements] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requirements') }})
    

@dataclass_json
@dataclass
class Game:
    rating: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rating') }})
    added: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('added') }})
    added_by_status: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('added_by_status') }})
    background_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('background_image') }})
    esrb_rating: Optional[GameEsrbRating] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('esrb_rating') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    metacritic: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metacritic') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    platforms: Optional[List[GamePlatforms]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platforms') }})
    playtime: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playtime') }})
    rating_top: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rating_top') }})
    ratings: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratings') }})
    ratings_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ratings_count') }})
    released: Optional[date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('released'), 'encoder': utils.dateisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reviews_text_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reviews_text_count') }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    suggestions_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestions_count') }})
    tba: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tba') }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
