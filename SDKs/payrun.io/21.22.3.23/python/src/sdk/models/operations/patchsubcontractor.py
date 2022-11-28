from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchSubContractorPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    sub_contractor_id: str = field(metadata={'path_param': { 'field_name': 'SubContractorId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchSubContractorHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchSubContractorRequest:
    headers: PatchSubContractorHeaders = field()
    path_params: PatchSubContractorPathParams = field()
    request: shared.SubContractor = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchSubContractorResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    sub_contractor: Optional[shared.SubContractor] = field(default=None)
    
