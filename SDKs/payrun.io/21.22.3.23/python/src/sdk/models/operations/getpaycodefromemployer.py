from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPayCodeFromEmployerPathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pay_code_id: str = field(default=None, metadata={'path_param': { 'field_name': 'PayCodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayCodeFromEmployerHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayCodeFromEmployerRequest:
    path_params: GetPayCodeFromEmployerPathParams = field(default=None)
    headers: GetPayCodeFromEmployerHeaders = field(default=None)
    

@dataclass
class GetPayCodeFromEmployerResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    pay_code: Optional[shared.PayCode] = field(default=None)
    status_code: int = field(default=None)
    
