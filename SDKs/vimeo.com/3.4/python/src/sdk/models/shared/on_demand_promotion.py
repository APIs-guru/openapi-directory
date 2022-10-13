from dataclasses import dataclass, field
from typing import Enum,List
from dataclasses_json import dataclass_json

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
    options: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'options' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    

@dataclass_json
@dataclass
class OnDemandPromotionMetadataConnections:
    codes: OnDemandPromotionMetadataConnectionsCodes = field(default=None, metadata={'dataclasses_json': { 'field_name': 'codes' }})
    

@dataclass_json
@dataclass
class OnDemandPromotionMetadata:
    connections: OnDemandPromotionMetadataConnections = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connections' }})
    
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
    access_type: OnDemandPromotionAccessTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'access_type' }})
    discount_type: OnDemandPromotionDiscountTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discount_type' }})
    download: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download' }})
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    metadata: OnDemandPromotionMetadata = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    percent_off: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'percent_off' }})
    product_type: OnDemandPromotionProductTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product_type' }})
    stream_period: OnDemandPromotionStreamPeriodEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stream_period' }})
    total: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    type: OnDemandPromotionTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri' }})
    
