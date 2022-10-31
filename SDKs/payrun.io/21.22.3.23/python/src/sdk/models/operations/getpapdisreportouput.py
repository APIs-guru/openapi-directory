from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetPapdisReportOuputQueryParams:
    employer_key: str = field(default=None, metadata={'query_param': { 'field_name': 'EmployerKey', 'style': 'form', 'explode': True }})
    message_function_code: str = field(default=None, metadata={'query_param': { 'field_name': 'MessageFunctionCode', 'style': 'form', 'explode': True }})
    pay_schedule_key: str = field(default=None, metadata={'query_param': { 'field_name': 'PayScheduleKey', 'style': 'form', 'explode': True }})
    payment_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'PaymentDate', 'style': 'form', 'explode': True }})
    pension_key: str = field(default=None, metadata={'query_param': { 'field_name': 'PensionKey', 'style': 'form', 'explode': True }})
    tax_year: str = field(default=None, metadata={'query_param': { 'field_name': 'TaxYear', 'style': 'form', 'explode': True }})
    transform_definition_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TransformDefinitionKey', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPapdisReportOuputHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPapdisReportOuputRequest:
    query_params: GetPapdisReportOuputQueryParams = field(default=None)
    headers: GetPapdisReportOuputHeaders = field(default=None)
    

@dataclass
class GetPapdisReportOuputResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    get_papdis_report_ouput_200_application_json_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    
