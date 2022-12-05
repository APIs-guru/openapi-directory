from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
from sdk.models import shared


@dataclass
class GetPotHoldingsPathParams:
    pot_id: str = field(metadata={'path_param': { 'field_name': 'pot_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPotHoldingsHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPotHoldingsSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetPotHoldingsRequest:
    headers: GetPotHoldingsHeaders = field()
    path_params: GetPotHoldingsPathParams = field()
    security: GetPotHoldingsSecurity = field()
    

@dataclass
class GetPotHoldingsResponse:
    content_type: str = field()
    status_code: int = field()
    get_pot_holdings_200_application_json_any: Optional[Any] = field(default=None)
    get_pot_holdings_400_application_json_any: Optional[Any] = field(default=None)
    get_pot_holdings_401_application_json_any: Optional[Any] = field(default=None)
    get_pot_holdings_403_application_json_any: Optional[Any] = field(default=None)
    get_pot_holdings_404_application_json_any: Optional[Any] = field(default=None)
    get_pot_holdings_429_application_json_any: Optional[Any] = field(default=None)
    get_pot_holdings_500_application_json_any: Optional[Any] = field(default=None)
    
