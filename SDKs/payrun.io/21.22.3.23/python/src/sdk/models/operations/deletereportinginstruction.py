from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteReportingInstructionPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    reporting_instruction_id: str = field(metadata={'path_param': { 'field_name': 'ReportingInstructionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteReportingInstructionHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteReportingInstructionRequest:
    headers: DeleteReportingInstructionHeaders = field()
    path_params: DeleteReportingInstructionPathParams = field()
    

@dataclass
class DeleteReportingInstructionResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
