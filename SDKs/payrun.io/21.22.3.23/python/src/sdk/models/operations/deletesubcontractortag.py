from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteSubContractorTagPathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    sub_contractor_id: str = field(default=None, metadata={'path_param': { 'field_name': 'SubContractorId', 'style': 'simple', 'explode': False }})
    tag_id: str = field(default=None, metadata={'path_param': { 'field_name': 'TagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSubContractorTagHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSubContractorTagRequest:
    path_params: DeleteSubContractorTagPathParams = field(default=None)
    headers: DeleteSubContractorTagHeaders = field(default=None)
    

@dataclass
class DeleteSubContractorTagResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    
