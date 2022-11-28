from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEmployerSecretPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    secret_id: str = field(metadata={'path_param': { 'field_name': 'SecretId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEmployerSecretHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEmployerSecretRequest:
    headers: GetEmployerSecretHeaders = field()
    path_params: GetEmployerSecretPathParams = field()
    

@dataclass
class GetEmployerSecretResponse:
    content_type: str = field()
    status_code: int = field()
    employer_secret: Optional[shared.EmployerSecret] = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
