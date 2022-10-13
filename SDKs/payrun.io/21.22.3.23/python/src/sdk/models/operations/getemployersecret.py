from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEmployerSecretPathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    secret_id: str = field(default=None, metadata={'path_param': { 'field_name': 'SecretId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEmployerSecretHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetEmployerSecretRequest:
    path_params: GetEmployerSecretPathParams = field(default=None)
    headers: GetEmployerSecretHeaders = field(default=None)
    

@dataclass
class GetEmployerSecretResponse:
    content_type: str = field(default=None)
    employer_secret: Optional[shared.EmployerSecret] = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    
