from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutPayCodePathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pay_code_id: str = field(default=None, metadata={'path_param': { 'field_name': 'PayCodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutPayCodeHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class PutPayCodeRequest:
    path_params: PutPayCodePathParams = field(default=None)
    headers: PutPayCodeHeaders = field(default=None)
    request: shared.PayCode = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutPayCodeResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    pay_code: Optional[shared.PayCode] = field(default=None)
    status_code: int = field(default=None)
    
