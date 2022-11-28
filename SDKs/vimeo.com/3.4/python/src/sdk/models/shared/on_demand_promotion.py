from dataclasses import dataclass, field
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class OnDemandPromotionAccessTypeEnum(str, Enum):
    DEFAULT = "default"
    VIP = "vip"

class OnDemandPromotionDiscountTypeEnum(str, Enum):
    DOLLARS = "dollars"
    FREE = "free"
    PERCENT = "percent"


@dataclass_json
@dataclass
class OnDemandPromotionMetadataConnectionsCodes:
    r"""OnDemandPromotionMetadataConnectionsCodes
    Information about the codes associated with this promotion.
    """
    
    options: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class OnDemandPromotionMetadataConnections:
    r"""OnDemandPromotionMetadataConnections
    A list of resource URIs related to the On Demand promotion.
    """
    
    codes: OnDemandPromotionMetadataConnectionsCodes = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('codes') }})
    

@dataclass_json
@dataclass
class OnDemandPromotionMetadata:
    r"""OnDemandPromotionMetadata
    The video's metadata.
    """
    
    connections: OnDemandPromotionMetadataConnections = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('connections') }})
    
class OnDemandPromotionProductTypeEnum(str, Enum):
    ANY = "any"
    BUY = "buy"
    BUY_EPISODE = "buy_episode"
    RENT = "rent"
    RENT_EPISODE = "rent_episode"
    SUBSCRIBE = "subscribe"

class OnDemandPromotionStreamPeriodEnum(str, Enum):
    ONE_WEEK = "1_week"
    ONE_YEAR = "1_year"
    TWENTY_FOUR_HOUR = "24_hour"
    THIRTY_DAYS = "30_days"
    THREE_MONTH = "3_month"
    FORTY_EIGHT_HOUR = "48_hour"
    SIX_MONTH = "6_month"
    SEVENTY_TWO_HOUR = "72_hour"

class OnDemandPromotionTypeEnum(str, Enum):
    BATCH = "batch"
    BATCH_PREFIX = "batch_prefix"
    SINGLE = "single"


@dataclass_json
@dataclass
class OnDemandPromotion:
    access_type: OnDemandPromotionAccessTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('access_type') }})
    discount_type: OnDemandPromotionDiscountTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('discount_type') }})
    download: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    label: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    metadata: OnDemandPromotionMetadata = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    percent_off: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('percent_off') }})
    product_type: OnDemandPromotionProductTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('product_type') }})
    stream_period: OnDemandPromotionStreamPeriodEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('stream_period') }})
    total: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    type: OnDemandPromotionTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    
