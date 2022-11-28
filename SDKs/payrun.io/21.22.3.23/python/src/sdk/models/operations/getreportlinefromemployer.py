from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetReportLineFromEmployerPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    report_line_id: str = field(metadata={'path_param': { 'field_name': 'ReportLineId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportLineFromEmployerHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportLineFromEmployerRequest:
    headers: GetReportLineFromEmployerHeaders = field()
    path_params: GetReportLineFromEmployerPathParams = field()
    

@dataclass
class GetReportLineFromEmployerResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    report_line: Optional[shared.ReportLine] = field(default=None)
    
