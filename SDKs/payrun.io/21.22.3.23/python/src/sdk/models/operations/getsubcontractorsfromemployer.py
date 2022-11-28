from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSubContractorsFromEmployerPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubContractorsFromEmployerHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubContractorsFromEmployerRequest:
    headers: GetSubContractorsFromEmployerHeaders = field()
    path_params: GetSubContractorsFromEmployerPathParams = field()
    

@dataclass
class GetSubContractorsFromEmployerResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link_collection: Optional[shared.LinkCollection] = field(default=None)
    
