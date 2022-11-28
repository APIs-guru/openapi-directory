from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutPayCodePathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pay_code_id: str = field(metadata={'path_param': { 'field_name': 'PayCodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutPayCodeHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutPayCodeRequest:
    headers: PutPayCodeHeaders = field()
    path_params: PutPayCodePathParams = field()
    request: shared.PayCode = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutPayCodeResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    pay_code: Optional[shared.PayCode] = field(default=None)
    
