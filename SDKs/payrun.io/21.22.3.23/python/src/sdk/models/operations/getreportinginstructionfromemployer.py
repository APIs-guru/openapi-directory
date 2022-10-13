from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetReportingInstructionFromEmployerPathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    reporting_instruction_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ReportingInstructionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportingInstructionFromEmployerHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetReportingInstructionFromEmployerRequest:
    path_params: GetReportingInstructionFromEmployerPathParams = field(default=None)
    headers: GetReportingInstructionFromEmployerHeaders = field(default=None)
    

@dataclass
class GetReportingInstructionFromEmployerResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    reporting_instruction: Optional[shared.ReportingInstruction] = field(default=None)
    status_code: int = field(default=None)
    
