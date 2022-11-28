from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateVodPromotionPathParams:
    ondemand_id: float = field(metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    
class CreateVodPromotionRequestBodyAccessTypeEnum(str, Enum):
    DEFAULT = "default"
    VIP = "vip"

class CreateVodPromotionRequestBodyDiscountTypeEnum(str, Enum):
    FREE = "free"
    PERCENT = "percent"

class CreateVodPromotionRequestBodyProductTypeEnum(str, Enum):
    ANY = "any"
    BUY = "buy"
    BUY_EPISODE = "buy_episode"
    RENT = "rent"
    RENT_EPISODE = "rent_episode"
    SUBSCRIBE = "subscribe"

class CreateVodPromotionRequestBodyStreamPeriodEnum(str, Enum):
    ONE_WEEK = "1_week"
    ONE_YEAR = "1_year"
    TWENTY_FOUR_HOUR = "24_hour"
    THIRTY_DAY = "30_day"
    THREE_MONTH = "3_month"
    FORTY_EIGHT_HOUR = "48_hour"
    SIX_MONTH = "6_month"
    SEVENTY_TWO_HOUR = "72_hour"

class CreateVodPromotionRequestBodyTypeEnum(str, Enum):
    BATCH = "batch"
    SINGLE = "single"


@dataclass_json
@dataclass
class CreateVodPromotionRequestBody:
    download: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    stream_period: CreateVodPromotionRequestBodyStreamPeriodEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stream_period') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    type: CreateVodPromotionRequestBodyTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    access_type: Optional[CreateVodPromotionRequestBodyAccessTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_type') }})
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    discount_type: Optional[CreateVodPromotionRequestBodyDiscountTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('discount_type') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_time') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    percent_off: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('percent_off') }})
    product_type: Optional[CreateVodPromotionRequestBodyProductTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product_type') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_time') }})
    

@dataclass
class CreateVodPromotionSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateVodPromotionRequest:
    path_params: CreateVodPromotionPathParams = field()
    request: CreateVodPromotionRequestBody = field(metadata={'request': { 'media_type': 'application/vnd.vimeo.ondemand.promotion+json' }})
    security: CreateVodPromotionSecurity = field()
    

@dataclass
class CreateVodPromotionResponse:
    content_type: str = field()
    status_code: int = field()
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    on_demand_promotion: Optional[shared.OnDemandPromotion] = field(default=None)
    
