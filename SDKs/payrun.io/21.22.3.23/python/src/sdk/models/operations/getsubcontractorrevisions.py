from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSubContractorRevisionsPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    sub_contractor_id: str = field(metadata={'path_param': { 'field_name': 'SubContractorId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubContractorRevisionsHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSubContractorRevisionsRequest:
    headers: GetSubContractorRevisionsHeaders = field()
    path_params: GetSubContractorRevisionsPathParams = field()
    

@dataclass
class GetSubContractorRevisionsResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link_collection: Optional[shared.LinkCollection] = field(default=None)
    
