from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateVodPathParams:
    user_id: float = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    
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
    aud: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AUD') }})
    cad: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CAD') }})
    chf: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CHF') }})
    dkk: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DKK') }})
    eur: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EUR') }})
    gbp: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GBP') }})
    jpy: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JPY') }})
    krw: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KRW') }})
    nok: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NOK') }})
    pln: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PLN') }})
    sek: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SEK') }})
    usd: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('USD') }})
    

@dataclass_json
@dataclass
class CreateVodRequestBodyBuy:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    download: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    price: Optional[CreateVodRequestBodyBuyPrice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    
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
    usd: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('USD') }})
    

@dataclass_json
@dataclass
class CreateVodRequestBodyEpisodesBuy:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    download: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download') }})
    price: Optional[CreateVodRequestBodyEpisodesBuyPrice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    
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
    usd: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('USD') }})
    

@dataclass_json
@dataclass
class CreateVodRequestBodyEpisodesRent:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    period: Optional[CreateVodRequestBodyEpisodesRentPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    price: Optional[CreateVodRequestBodyEpisodesRentPrice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    

@dataclass_json
@dataclass
class CreateVodRequestBodyEpisodes:
    buy: Optional[CreateVodRequestBodyEpisodesBuy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buy') }})
    rent: Optional[CreateVodRequestBodyEpisodesRent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rent') }})
    
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
    aud: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AUD') }})
    cad: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CAD') }})
    chf: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CHF') }})
    dkk: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DKK') }})
    eur: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EUR') }})
    gbp: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GBP') }})
    jpy: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JPY') }})
    krw: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KRW') }})
    nok: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NOK') }})
    pln: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PLN') }})
    sek: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SEK') }})
    usd: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('USD') }})
    

@dataclass_json
@dataclass
class CreateVodRequestBodyRent:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    period: Optional[CreateVodRequestBodyRentPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    price: Optional[CreateVodRequestBodyRentPrice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    

@dataclass_json
@dataclass
class CreateVodRequestBodySubscriptionMonthlyPrice:
    usd: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('USD') }})
    

@dataclass_json
@dataclass
class CreateVodRequestBodySubscriptionMonthly:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    price: Optional[CreateVodRequestBodySubscriptionMonthlyPrice] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    

@dataclass_json
@dataclass
class CreateVodRequestBodySubscription:
    monthly: Optional[CreateVodRequestBodySubscriptionMonthly] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthly') }})
    
class CreateVodRequestBodyTypeEnum(str, Enum):
    FILM = "film"
    SERIES = "series"


@dataclass_json
@dataclass
class CreateVodRequestBody:
    content_rating: CreateVodRequestBodyContentRatingEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_rating') }})
    description: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: CreateVodRequestBodyTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    accepted_currencies: Optional[CreateVodRequestBodyAcceptedCurrenciesEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accepted_currencies') }})
    buy: Optional[CreateVodRequestBodyBuy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buy') }})
    domain_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain_link') }})
    episodes: Optional[CreateVodRequestBodyEpisodes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('episodes') }})
    link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    rent: Optional[CreateVodRequestBodyRent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rent') }})
    subscription: Optional[CreateVodRequestBodySubscription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription') }})
    

@dataclass
class CreateVodRequest:
    path_params: CreateVodPathParams = field()
    request: CreateVodRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateVodResponse:
    content_type: str = field()
    status_code: int = field()
    on_demand_page: Optional[shared.OnDemandPage] = field(default=None)
    
