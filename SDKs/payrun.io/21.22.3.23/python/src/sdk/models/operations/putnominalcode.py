from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutNominalCodePathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    nominal_code_id: str = field(default=None, metadata={'path_param': { 'field_name': 'NominalCodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutNominalCodeHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class PutNominalCodeRequest:
    path_params: PutNominalCodePathParams = field(default=None)
    headers: PutNominalCodeHeaders = field(default=None)
    request: shared.NominalCode = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutNominalCodeResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    nominal_code: Optional[shared.NominalCode] = field(default=None)
    status_code: int = field(default=None)
    
