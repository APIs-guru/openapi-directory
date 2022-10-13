from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateVodPathParams:
    user_id: float = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    
class CreateVodRequestBodyAcceptedCurrenciesEnum(str, Enum):
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
class CreateVodRequestBodyBuyPrice:
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
class CreateVodRequestBodyBuy:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    download: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download' }})
    price: Optional[CreateVodRequestBodyBuyPrice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    
class CreateVodRequestBodyContentRatingEnum(str, Enum):
    DRUGS = "drugs"
    LANGUAGE = "language"
    NUDITY = "nudity"
    SAFE = "safe"
    UNRATED = "unrated"
    VIOLENCE = "violence"


@dataclass_json
@dataclass
class CreateVodRequestBodyEpisodesBuyPrice:
    usd: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'USD' }})
    

@dataclass_json
@dataclass
class CreateVodRequestBodyEpisodesBuy:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    download: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download' }})
    price: Optional[CreateVodRequestBodyEpisodesBuyPrice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    
class CreateVodRequestBodyEpisodesRentPeriodEnum(str, Enum):
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
class CreateVodRequestBodyEpisodesRentPrice:
    usd: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'USD' }})
    

@dataclass_json
@dataclass
class CreateVodRequestBodyEpisodesRent:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    period: Optional[CreateVodRequestBodyEpisodesRentPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'period' }})
    price: Optional[CreateVodRequestBodyEpisodesRentPrice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    

@dataclass_json
@dataclass
class CreateVodRequestBodyEpisodes:
    buy: Optional[CreateVodRequestBodyEpisodesBuy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buy' }})
    rent: Optional[CreateVodRequestBodyEpisodesRent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rent' }})
    
class CreateVodRequestBodyRentPeriodEnum(str, Enum):
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
class CreateVodRequestBodyRentPrice:
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
class CreateVodRequestBodyRent:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    period: Optional[CreateVodRequestBodyRentPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'period' }})
    price: Optional[CreateVodRequestBodyRentPrice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    

@dataclass_json
@dataclass
class CreateVodRequestBodySubscriptionMonthlyPrice:
    usd: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'USD' }})
    

@dataclass_json
@dataclass
class CreateVodRequestBodySubscriptionMonthly:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    price: Optional[CreateVodRequestBodySubscriptionMonthlyPrice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    

@dataclass_json
@dataclass
class CreateVodRequestBodySubscription:
    monthly: Optional[CreateVodRequestBodySubscriptionMonthly] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monthly' }})
    
class CreateVodRequestBodyTypeEnum(str, Enum):
    FILM = "film"
    SERIES = "series"


@dataclass_json
@dataclass
class CreateVodRequestBody:
    accepted_currencies: Optional[CreateVodRequestBodyAcceptedCurrenciesEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accepted_currencies' }})
    buy: Optional[CreateVodRequestBodyBuy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buy' }})
    content_rating: CreateVodRequestBodyContentRatingEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content_rating' }})
    description: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    domain_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain_link' }})
    episodes: Optional[CreateVodRequestBodyEpisodes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'episodes' }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rent: Optional[CreateVodRequestBodyRent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rent' }})
    subscription: Optional[CreateVodRequestBodySubscription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscription' }})
    type: CreateVodRequestBodyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class CreateVodRequest:
    path_params: CreateVodPathParams = field(default=None)
    request: CreateVodRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateVodResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    on_demand_page: Optional[shared.OnDemandPage] = field(default=None)
    
