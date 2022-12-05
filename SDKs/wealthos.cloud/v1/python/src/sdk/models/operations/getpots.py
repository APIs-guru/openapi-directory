from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared
from sdk.models import shared


@dataclass
class GetPotsPathParams:
    investor_id: str = field(metadata={'path_param': { 'field_name': 'investor_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPotsQueryParams:
    financial_product_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'financial_product_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPotsHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPotsSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass_json
@dataclass
class GetPots200ApplicationJSON:
    r"""GetPots200ApplicationJSON
    Array of all active investment pots created by the investor
    """
    
    pots: list[Any] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pots') }})
    

@dataclass
class GetPotsRequest:
    headers: GetPotsHeaders = field()
    path_params: GetPotsPathParams = field()
    query_params: GetPotsQueryParams = field()
    security: GetPotsSecurity = field()
    

@dataclass
class GetPotsResponse:
    content_type: str = field()
    status_code: int = field()
    get_pots_200_application_json_object: Optional[GetPots200ApplicationJSON] = field(default=None)
    get_pots_400_application_json_any: Optional[Any] = field(default=None)
    get_pots_401_application_json_any: Optional[Any] = field(default=None)
    get_pots_403_application_json_any: Optional[Any] = field(default=None)
    get_pots_404_application_json_any: Optional[Any] = field(default=None)
    get_pots_429_application_json_any: Optional[Any] = field(default=None)
    get_pots_500_application_json_any: Optional[Any] = field(default=None)
    
