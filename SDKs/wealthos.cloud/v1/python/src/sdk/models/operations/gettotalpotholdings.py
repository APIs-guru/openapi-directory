from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
from sdk.models import shared


@dataclass
class GetTotalPotHoldingsPathParams:
    investor_id: str = field(metadata={'path_param': { 'field_name': 'investor_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTotalPotHoldingsHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTotalPotHoldingsSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTotalPotHoldingsRequest:
    headers: GetTotalPotHoldingsHeaders = field()
    path_params: GetTotalPotHoldingsPathParams = field()
    security: GetTotalPotHoldingsSecurity = field()
    

@dataclass
class GetTotalPotHoldingsResponse:
    content_type: str = field()
    status_code: int = field()
    get_total_pot_holdings_200_application_json_any: Optional[Any] = field(default=None)
    get_total_pot_holdings_401_application_json_any: Optional[Any] = field(default=None)
    get_total_pot_holdings_403_application_json_any: Optional[Any] = field(default=None)
    get_total_pot_holdings_404_application_json_any: Optional[Any] = field(default=None)
    get_total_pot_holdings_429_application_json_any: Optional[Any] = field(default=None)
    get_total_pot_holdings_500_application_json_any: Optional[Any] = field(default=None)
    
