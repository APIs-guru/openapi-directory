from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteNominalCodePathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    nominal_code_id: str = field(default=None, metadata={'path_param': { 'field_name': 'NominalCodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNominalCodeHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteNominalCodeRequest:
    path_params: DeleteNominalCodePathParams = field(default=None)
    headers: DeleteNominalCodeHeaders = field(default=None)
    

@dataclass
class DeleteNominalCodeResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    
