from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetNominalCodesFromEmployerPathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNominalCodesFromEmployerHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNominalCodesFromEmployerRequest:
    path_params: GetNominalCodesFromEmployerPathParams = field(default=None)
    headers: GetNominalCodesFromEmployerHeaders = field(default=None)
    

@dataclass
class GetNominalCodesFromEmployerResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link_collection: Optional[shared.LinkCollection] = field(default=None)
    status_code: int = field(default=None)
    
