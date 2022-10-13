from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class AddVideoToVodPathParams:
    ondemand_id: float = field(default=None, metadata={'path_param': { 'field_name': 'ondemand_id', 'style': 'simple', 'explode': False }})
    video_id: float = field(default=None, metadata={'path_param': { 'field_name': 'video_id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class AddVideoToVodRequestBodyBuyPrice:
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
class AddVideoToVodRequestBodyBuy:
    price: Optional[AddVideoToVodRequestBodyBuyPrice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    

@dataclass_json
@dataclass
class AddVideoToVodRequestBodyRentPrice:
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
class AddVideoToVodRequestBodyRent:
    price: Optional[AddVideoToVodRequestBodyRentPrice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    
class AddVideoToVodRequestBodyTypeEnum(str, Enum):
    EXTRA = "extra"
    MAIN = "main"
    TRAILER = "trailer"


@dataclass_json
@dataclass
class AddVideoToVodRequestBody:
    buy: Optional[AddVideoToVodRequestBodyBuy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buy' }})
    position: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    release_year: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'release_year' }})
    rent: Optional[AddVideoToVodRequestBodyRent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rent' }})
    type: AddVideoToVodRequestBodyTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class AddVideoToVodSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AddVideoToVodRequest:
    path_params: AddVideoToVodPathParams = field(default=None)
    request: AddVideoToVodRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/vnd.vimeo.ondemand.video+json' }})
    security: AddVideoToVodSecurity = field(default=None)
    

@dataclass
class AddVideoToVodResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    legacy_error: Optional[shared.LegacyError] = field(default=None)
    on_demand_video: Optional[shared.OnDemandVideo] = field(default=None)
    
