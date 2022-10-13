from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteReportingInstructionPathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    reporting_instruction_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ReportingInstructionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteReportingInstructionHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class DeleteReportingInstructionRequest:
    path_params: DeleteReportingInstructionPathParams = field(default=None)
    headers: DeleteReportingInstructionHeaders = field(default=None)
    

@dataclass
class DeleteReportingInstructionResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    
