from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutEmployeeSecretPathParams:
    employee_id: str = field(metadata={'path_param': { 'field_name': 'EmployeeId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    secret_id: str = field(metadata={'path_param': { 'field_name': 'SecretId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutEmployeeSecretHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutEmployeeSecretRequest:
    headers: PutEmployeeSecretHeaders = field()
    path_params: PutEmployeeSecretPathParams = field()
    

@dataclass
class PutEmployeeSecretResponse:
    content_type: str = field()
    status_code: int = field()
    employee_secret: Optional[shared.EmployeeSecret] = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
