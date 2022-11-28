from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetNominalCodeFromEmployerPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    nominal_code_id: str = field(metadata={'path_param': { 'field_name': 'NominalCodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNominalCodeFromEmployerHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNominalCodeFromEmployerRequest:
    headers: GetNominalCodeFromEmployerHeaders = field()
    path_params: GetNominalCodeFromEmployerPathParams = field()
    

@dataclass
class GetNominalCodeFromEmployerResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    nominal_code: Optional[shared.NominalCode] = field(default=None)
    
