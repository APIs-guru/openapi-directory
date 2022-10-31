from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetReportLineFromEmployerPathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    report_line_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ReportLineId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportLineFromEmployerHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportLineFromEmployerRequest:
    path_params: GetReportLineFromEmployerPathParams = field(default=None)
    headers: GetReportLineFromEmployerHeaders = field(default=None)
    

@dataclass
class GetReportLineFromEmployerResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    report_line: Optional[shared.ReportLine] = field(default=None)
    status_code: int = field(default=None)
    
