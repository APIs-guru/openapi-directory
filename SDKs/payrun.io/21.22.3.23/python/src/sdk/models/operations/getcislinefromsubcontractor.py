from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCisLineFromSubContractorPathParams:
    cis_line_id: str = field(metadata={'path_param': { 'field_name': 'CisLineId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    sub_contractor_id: str = field(metadata={'path_param': { 'field_name': 'SubContractorId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCisLineFromSubContractorHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCisLineFromSubContractorRequest:
    headers: GetCisLineFromSubContractorHeaders = field()
    path_params: GetCisLineFromSubContractorPathParams = field()
    

@dataclass
class GetCisLineFromSubContractorResponse:
    content_type: str = field()
    status_code: int = field()
    cis_line: Optional[shared.CisLine] = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
