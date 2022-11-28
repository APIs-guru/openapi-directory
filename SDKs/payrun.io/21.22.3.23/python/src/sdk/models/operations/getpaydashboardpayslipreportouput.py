from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class GetPayDashboardPayslipReportOuputQueryParams:
    employer_key: str = field(metadata={'query_param': { 'field_name': 'EmployerKey', 'style': 'form', 'explode': True }})
    pay_schedule_key: str = field(metadata={'query_param': { 'field_name': 'PayScheduleKey', 'style': 'form', 'explode': True }})
    publication_date: date = field(metadata={'query_param': { 'field_name': 'PublicationDate', 'style': 'form', 'explode': True }})
    tax_year: str = field(metadata={'query_param': { 'field_name': 'TaxYear', 'style': 'form', 'explode': True }})
    employee_codes: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'EmployeeCodes', 'style': 'form', 'explode': True }})
    max_index: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxIndex', 'style': 'form', 'explode': True }})
    payment_date: Optional[date] = field(default=None, metadata={'query_param': { 'field_name': 'PaymentDate', 'style': 'form', 'explode': True }})
    start_index: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'StartIndex', 'style': 'form', 'explode': True }})
    transform_definition_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TransformDefinitionKey', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPayDashboardPayslipReportOuputHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayDashboardPayslipReportOuputRequest:
    headers: GetPayDashboardPayslipReportOuputHeaders = field()
    query_params: GetPayDashboardPayslipReportOuputQueryParams = field()
    

@dataclass
class GetPayDashboardPayslipReportOuputResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    get_pay_dashboard_payslip_report_ouput_200_application_json_binary_string: Optional[bytes] = field(default=None)
    
