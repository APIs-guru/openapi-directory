from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEmployeeSecretPathParams:
    employee_id: str = field(metadata={'path_param': { 'field_name': 'EmployeeId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    secret_id: str = field(metadata={'path_param': { 'field_name': 'SecretId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEmployeeSecretHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEmployeeSecretRequest:
    headers: GetEmployeeSecretHeaders = field()
    path_params: GetEmployeeSecretPathParams = field()
    

@dataclass
class GetEmployeeSecretResponse:
    content_type: str = field()
    status_code: int = field()
    employee_secret: Optional[shared.EmployeeSecret] = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
