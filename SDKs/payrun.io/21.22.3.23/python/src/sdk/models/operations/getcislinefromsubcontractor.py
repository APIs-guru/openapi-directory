from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCisLineFromSubContractorPathParams:
    cis_line_id: str = field(default=None, metadata={'path_param': { 'field_name': 'CisLineId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    sub_contractor_id: str = field(default=None, metadata={'path_param': { 'field_name': 'SubContractorId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCisLineFromSubContractorHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetCisLineFromSubContractorRequest:
    path_params: GetCisLineFromSubContractorPathParams = field(default=None)
    headers: GetCisLineFromSubContractorHeaders = field(default=None)
    

@dataclass
class GetCisLineFromSubContractorResponse:
    cis_line: Optional[shared.CisLine] = field(default=None)
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    
