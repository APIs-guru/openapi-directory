from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPayCodeFromEmployerPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pay_code_id: str = field(metadata={'path_param': { 'field_name': 'PayCodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayCodeFromEmployerHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayCodeFromEmployerRequest:
    headers: GetPayCodeFromEmployerHeaders = field()
    path_params: GetPayCodeFromEmployerPathParams = field()
    

@dataclass
class GetPayCodeFromEmployerResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    pay_code: Optional[shared.PayCode] = field(default=None)
    
