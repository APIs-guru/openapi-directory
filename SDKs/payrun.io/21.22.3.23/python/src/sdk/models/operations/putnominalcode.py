from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutNominalCodePathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    nominal_code_id: str = field(metadata={'path_param': { 'field_name': 'NominalCodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutNominalCodeHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutNominalCodeRequest:
    headers: PutNominalCodeHeaders = field()
    path_params: PutNominalCodePathParams = field()
    request: shared.NominalCode = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutNominalCodeResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    nominal_code: Optional[shared.NominalCode] = field(default=None)
    
