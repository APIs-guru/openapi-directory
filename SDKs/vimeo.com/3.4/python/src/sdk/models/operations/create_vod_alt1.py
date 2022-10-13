from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class CreateVodAlt1RequestBodyAcceptedCurrenciesEnum(str, Enum):
    AUD = "AUD"
    CAD = "CAD"
    CHF = "CHF"
    DKK = "DKK"
    EUR = "EUR"
    GBP = "GBP"
    JPY = "JPY"
    KRW = "KRW"
    NOK = "NOK"
    PLN = "PLN"
    SEK = "SEK"
    USD = "USD"


@dataclass_json
@dataclass
class CreateVodAlt1RequestBodyBuyPrice:
    aud: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AUD' }})
    cad: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CAD' }})
    chf: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CHF' }})
    dkk: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DKK' }})
    eur: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EUR' }})
    gbp: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GBP' }})
    jpy: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JPY' }})
    krw: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KRW' }})
    nok: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NOK' }})
    pln: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PLN' }})
    sek: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SEK' }})
    usd: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'USD' }})
    

@dataclass_json
@dataclass
class CreateVodAlt1RequestBodyBuy:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    download: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download' }})
    price: Optional[CreateVodAlt1RequestBodyBuyPrice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    
class CreateVodAlt1RequestBodyContentRatingEnum(str, Enum):
    DRUGS = "drugs"
    LANGUAGE = "language"
    NUDITY = "nudity"
    SAFE = "safe"
    UNRATED = "unrated"
    VIOLENCE = "violence"


@dataclass_json
@dataclass
class CreateVodAlt1RequestBodyEpisodesBuyPrice:
    usd: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'USD' }})
    

@dataclass_json
@dataclass
class CreateVodAlt1RequestBodyEpisodesBuy:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    download: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download' }})
    price: Optional[CreateVodAlt1RequestBodyEpisodesBuyPrice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    
class CreateVodAlt1RequestBodyEpisodesRentPeriodEnum(str, Enum):
    ONE_WEEK = "1 week"
    ONE_YEAR = "1 year"
    TWENTY_FOUR_HOUR = "24 hour"
    THREE_MONTH = "3 month"
    THIRTY_DAY = "30 day"
    FORTY_EIGHT_HOUR = "48 hour"
    SIX_MONTH = "6 month"
    SEVENTY_TWO_HOUR = "72 hour"


@dataclass_json
@dataclass
class CreateVodAlt1RequestBodyEpisodesRentPrice:
    usd: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'USD' }})
    

@dataclass_json
@dataclass
class CreateVodAlt1RequestBodyEpisodesRent:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    period: Optional[CreateVodAlt1RequestBodyEpisodesRentPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'period' }})
    price: Optional[CreateVodAlt1RequestBodyEpisodesRentPrice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    

@dataclass_json
@dataclass
class CreateVodAlt1RequestBodyEpisodes:
    buy: Optional[CreateVodAlt1RequestBodyEpisodesBuy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buy' }})
    rent: Optional[CreateVodAlt1RequestBodyEpisodesRent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rent' }})
    
class CreateVodAlt1RequestBodyRentPeriodEnum(str, Enum):
    ONE_WEEK = "1 week"
    ONE_YEAR = "1 year"
    TWENTY_FOUR_HOUR = "24 hour"
    THREE_MONTH = "3 month"
    THIRTY_DAY = "30 day"
    FORTY_EIGHT_HOUR = "48 hour"
    SIX_MONTH = "6 month"
    SEVENTY_TWO_HOUR = "72 hour"


@dataclass_json
@dataclass
class CreateVodAlt1RequestBodyRentPrice:
    aud: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AUD' }})
    cad: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CAD' }})
    chf: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CHF' }})
    dkk: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DKK' }})
    eur: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EUR' }})
    gbp: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GBP' }})
    jpy: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JPY' }})
    krw: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KRW' }})
    nok: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NOK' }})
    pln: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PLN' }})
    sek: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SEK' }})
    usd: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'USD' }})
    

@dataclass_json
@dataclass
class CreateVodAlt1RequestBodyRent:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    period: Optional[CreateVodAlt1RequestBodyRentPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'period' }})
    price: Optional[CreateVodAlt1RequestBodyRentPrice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    

@dataclass_json
@dataclass
class CreateVodAlt1RequestBodySubscriptionMonthlyPrice:
    usd: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'USD' }})
    

@dataclass_json
@dataclass
class CreateVodAlt1RequestBodySubscriptionMonthly:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    price: Optional[CreateVodAlt1RequestBodySubscriptionMonthlyPrice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    

@dataclass_json
@dataclass
class CreateVodAlt1RequestBodySubscription:
    monthly: Optional[CreateVodAlt1RequestBodySubscriptionMonthly] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monthly' }})
    
class CreateVodAlt1RequestBodyTypeEnum(str, Enum):
    FILM = "film"
    SERIES = "series"


@dataclass_json
@dataclass
class CreateVodAlt1RequestBody:
    accepted_currencies: Optional[CreateVodAlt1RequestBodyAcceptedCurrenciesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accepted_currencies' }})
    buy: Optional[CreateVodAlt1RequestBodyBuy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buy' }})
    content_rating: CreateVodAlt1RequestBodyContentRatingEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content_rating' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    domain_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain_link' }})
    episodes: Optional[CreateVodAlt1RequestBodyEpisodes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'episodes' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rent: Optional[CreateVodAlt1RequestBodyRent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rent' }})
    subscription: Optional[CreateVodAlt1RequestBodySubscription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscription' }})
    type: CreateVodAlt1RequestBodyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class CreateVodAlt1Request:
    request: CreateVodAlt1RequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateVodAlt1Response:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    on_demand_page: Optional[shared.OnDemandPage] = field(default=None)
    
