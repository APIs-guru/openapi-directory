from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetReportingInstructionFromEmployerPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    reporting_instruction_id: str = field(metadata={'path_param': { 'field_name': 'ReportingInstructionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportingInstructionFromEmployerHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportingInstructionFromEmployerRequest:
    headers: GetReportingInstructionFromEmployerHeaders = field()
    path_params: GetReportingInstructionFromEmployerPathParams = field()
    

@dataclass
class GetReportingInstructionFromEmployerResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    reporting_instruction: Optional[shared.ReportingInstruction] = field(default=None)
    
