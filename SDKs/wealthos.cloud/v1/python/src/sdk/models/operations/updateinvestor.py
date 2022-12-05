from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared
from sdk.models import shared


@dataclass
class UpdateInvestorPathParams:
    investor_id: str = field(metadata={'path_param': { 'field_name': 'investor_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateInvestorHeaders:
    x_api_key: str = field(metadata={'header': { 'field_name': 'x-api-key', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateInvestorSecurity:
    api_secret_key: shared.SchemeAPISecretKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateInvestorRequest:
    headers: UpdateInvestorHeaders = field()
    path_params: UpdateInvestorPathParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    security: UpdateInvestorSecurity = field()
    

@dataclass
class UpdateInvestorResponse:
    content_type: str = field()
    status_code: int = field()
    root_type_for_investor: Optional[Any] = field(default=None)
    update_investor_400_application_json_any: Optional[Any] = field(default=None)
    update_investor_401_application_json_any: Optional[Any] = field(default=None)
    update_investor_403_application_json_any: Optional[Any] = field(default=None)
    update_investor_404_application_json_any: Optional[Any] = field(default=None)
    update_investor_409_application_json_any: Optional[Any] = field(default=None)
    update_investor_429_application_json_any: Optional[Any] = field(default=None)
    update_investor_500_application_json_any: Optional[Any] = field(default=None)
    
