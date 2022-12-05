from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared
from sdk.models import shared

class GetRatesRateTypeEnum(str, Enum):
    FX_SPOT = "fx-spot"


@dataclass
class GetRatesPathParams:
    rate_type: GetRatesRateTypeEnum = field(metadata={'path_param': { 'field_name': 'rate_type', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRatesHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRatesSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclass
class GetRates200ApplicationJSON:
    rates: list[Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('rates') }})
    

@dataclass
class GetRatesRequest:
    headers: GetRatesHeaders = field()
    path_params: GetRatesPathParams = field()
    security: GetRatesSecurity = field()
    

@dataclass
class GetRatesResponse:
    content_type: str = field()
    status_code: int = field()
    get_rates_200_application_json_object: Optional[GetRates200ApplicationJSON] = field(default=None)
    get_rates_401_application_json_any: Optional[Any] = field(default=None)
    get_rates_403_application_json_any: Optional[Any] = field(default=None)
    get_rates_404_application_json_any: Optional[Any] = field(default=None)
    get_rates_429_application_json_any: Optional[Any] = field(default=None)
    get_rates_500_application_json_any: Optional[Any] = field(default=None)
    
