from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSubContractorRevisionByNumberPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    revision_number: str = field(metadata={'path_param': { 'field_name': 'RevisionNumber', 'style': 'simple', 'explode': False }})
    sub_contractor_id: str = field(metadata={'path_param': { 'field_name': 'SubContractorId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubContractorRevisionByNumberHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubContractorRevisionByNumberRequest:
    headers: GetSubContractorRevisionByNumberHeaders = field()
    path_params: GetSubContractorRevisionByNumberPathParams = field()
    

@dataclass
class GetSubContractorRevisionByNumberResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    sub_contractor: Optional[shared.SubContractor] = field(default=None)
    
