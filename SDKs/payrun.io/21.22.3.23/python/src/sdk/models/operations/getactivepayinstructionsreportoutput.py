from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetActivePayInstructionsReportOutputQueryParams:
    employee_key: str = field(metadata={'query_param': { 'field_name': 'EmployeeKey', 'style': 'form', 'explode': True }})
    employer_key: str = field(metadata={'query_param': { 'field_name': 'EmployerKey', 'style': 'form', 'explode': True }})
    from_date: date = field(metadata={'query_param': { 'field_name': 'FromDate', 'style': 'form', 'explode': True }})
    active_on: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'ActiveOn', 'style': 'form', 'explode': True }})
    to_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'ToDate', 'style': 'form', 'explode': True }})
    type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetActivePayInstructionsReportOutputHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetActivePayInstructionsReportOutputRequest:
    headers: GetActivePayInstructionsReportOutputHeaders = field()
    query_params: GetActivePayInstructionsReportOutputQueryParams = field()
    

@dataclass
class GetActivePayInstructionsReportOutputResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    get_active_pay_instructions_report_output_200_application_json_binary_string: Optional[bytes] = field(default=None)
    
