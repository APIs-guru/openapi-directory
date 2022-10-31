from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetEmployerSummaryReportOuputQueryParams:
    context_date: datetime = field(default=None, metadata={'query_param': { 'field_name': 'ContextDate', 'style': 'form', 'explode': True }})
    employer_key: str = field(default=None, metadata={'query_param': { 'field_name': 'EmployerKey', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEmployerSummaryReportOuputHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEmployerSummaryReportOuputRequest:
    query_params: GetEmployerSummaryReportOuputQueryParams = field(default=None)
    headers: GetEmployerSummaryReportOuputHeaders = field(default=None)
    

@dataclass
class GetEmployerSummaryReportOuputResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    get_employer_summary_report_ouput_200_application_json_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    
