from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteNominalCodePathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    nominal_code_id: str = field(metadata={'path_param': { 'field_name': 'NominalCodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNominalCodeHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNominalCodeRequest:
    headers: DeleteNominalCodeHeaders = field()
    path_params: DeleteNominalCodePathParams = field()
    

@dataclass
class DeleteNominalCodeResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
