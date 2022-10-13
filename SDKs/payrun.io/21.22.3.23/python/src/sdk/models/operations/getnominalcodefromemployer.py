from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetNominalCodeFromEmployerPathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    nominal_code_id: str = field(default=None, metadata={'path_param': { 'field_name': 'NominalCodeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNominalCodeFromEmployerHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetNominalCodeFromEmployerRequest:
    path_params: GetNominalCodeFromEmployerPathParams = field(default=None)
    headers: GetNominalCodeFromEmployerHeaders = field(default=None)
    

@dataclass
class GetNominalCodeFromEmployerResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    nominal_code: Optional[shared.NominalCode] = field(default=None)
    status_code: int = field(default=None)
    
