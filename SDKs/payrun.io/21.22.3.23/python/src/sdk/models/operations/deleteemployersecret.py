from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteEmployerSecretPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    secret_id: str = field(metadata={'path_param': { 'field_name': 'SecretId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteEmployerSecretHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteEmployerSecretRequest:
    headers: DeleteEmployerSecretHeaders = field()
    path_params: DeleteEmployerSecretPathParams = field()
    

@dataclass
class DeleteEmployerSecretResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
