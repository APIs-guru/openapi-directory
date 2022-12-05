from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
from sdk.models import shared


@dataclass
class GetInvestorPathParams:
    investor_id: str = field(metadata={'path_param': { 'field_name': 'investor_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInvestorHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInvestorSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetInvestorRequest:
    headers: GetInvestorHeaders = field()
    path_params: GetInvestorPathParams = field()
    security: GetInvestorSecurity = field()
    

@dataclass
class GetInvestorResponse:
    content_type: str = field()
    status_code: int = field()
    root_type_for_investor: Optional[Any] = field(default=None)
    get_investor_400_application_json_any: Optional[Any] = field(default=None)
    get_investor_401_application_json_any: Optional[Any] = field(default=None)
    get_investor_403_application_json_any: Optional[Any] = field(default=None)
    get_investor_404_application_json_any: Optional[Any] = field(default=None)
    get_investor_429_application_json_any: Optional[Any] = field(default=None)
    get_investor_500_application_json_any: Optional[Any] = field(default=None)
    
