from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared
from sdk.models import shared


@dataclass
class CreateInvestorHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateInvestorSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CreateInvestorRequest:
    headers: CreateInvestorHeaders = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateInvestorSecurity = field()
    

@dataclass
class CreateInvestorResponse:
    content_type: str = field()
    status_code: int = field()
    root_type_for_investor_creation_response: Optional[Any] = field(default=None)
    create_investor_400_application_json_any: Optional[Any] = field(default=None)
    create_investor_401_application_json_any: Optional[Any] = field(default=None)
    create_investor_403_application_json_any: Optional[Any] = field(default=None)
    create_investor_429_application_json_any: Optional[Any] = field(default=None)
    create_investor_500_application_json_any: Optional[Any] = field(default=None)
    
