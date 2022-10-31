from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSubContractorFromEmployerPathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    sub_contractor_id: str = field(default=None, metadata={'path_param': { 'field_name': 'SubContractorId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubContractorFromEmployerHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubContractorFromEmployerRequest:
    path_params: GetSubContractorFromEmployerPathParams = field(default=None)
    headers: GetSubContractorFromEmployerHeaders = field(default=None)
    

@dataclass
class GetSubContractorFromEmployerResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    sub_contractor: Optional[shared.SubContractor] = field(default=None)
    
