from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutSubContractorIntoEmployerPathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    sub_contractor_id: str = field(default=None, metadata={'path_param': { 'field_name': 'SubContractorId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSubContractorIntoEmployerHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class PutSubContractorIntoEmployerRequest:
    path_params: PutSubContractorIntoEmployerPathParams = field(default=None)
    headers: PutSubContractorIntoEmployerHeaders = field(default=None)
    request: shared.SubContractor = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutSubContractorIntoEmployerResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    sub_contractor: Optional[shared.SubContractor] = field(default=None)
    
