from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutReportingInstructionPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    reporting_instruction_id: str = field(metadata={'path_param': { 'field_name': 'ReportingInstructionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutReportingInstructionHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutReportingInstructionRequest:
    headers: PutReportingInstructionHeaders = field()
    path_params: PutReportingInstructionPathParams = field()
    request: shared.ReportingInstruction = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutReportingInstructionResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    reporting_instruction: Optional[shared.ReportingInstruction] = field(default=None)
    
