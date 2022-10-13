from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetPassReportOuputQueryParams:
    document_id: str = field(default=None, metadata={'query_param': { 'field_name': 'DocumentId', 'style': 'form', 'explode': True }})
    employer_key: str = field(default=None, metadata={'query_param': { 'field_name': 'EmployerKey', 'style': 'form', 'explode': True }})
    intermediary_id: str = field(default=None, metadata={'query_param': { 'field_name': 'IntermediaryId', 'style': 'form', 'explode': True }})
    message_function_code: str = field(default=None, metadata={'query_param': { 'field_name': 'MessageFunctionCode', 'style': 'form', 'explode': True }})
    pay_schedule_key: str = field(default=None, metadata={'query_param': { 'field_name': 'PayScheduleKey', 'style': 'form', 'explode': True }})
    payment_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'PaymentDate', 'style': 'form', 'explode': True }})
    pension_key: str = field(default=None, metadata={'query_param': { 'field_name': 'PensionKey', 'style': 'form', 'explode': True }})
    tax_year: str = field(default=None, metadata={'query_param': { 'field_name': 'TaxYear', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPassReportOuputHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetPassReportOuputRequest:
    query_params: GetPassReportOuputQueryParams = field(default=None)
    headers: GetPassReportOuputHeaders = field(default=None)
    

@dataclass
class GetPassReportOuputResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    get_pass_report_ouput_200_application_json_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    
