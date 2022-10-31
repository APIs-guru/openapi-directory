from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetJournalReportOuputQueryParams:
    employer_key: str = field(default=None, metadata={'query_param': { 'field_name': 'EmployerKey', 'style': 'form', 'explode': True }})
    ledger_target: str = field(default=None, metadata={'query_param': { 'field_name': 'LedgerTarget', 'style': 'form', 'explode': True }})
    pay_frequency: str = field(default=None, metadata={'query_param': { 'field_name': 'PayFrequency', 'style': 'form', 'explode': True }})
    tax_period: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TaxPeriod', 'style': 'form', 'explode': True }})
    tax_year: str = field(default=None, metadata={'query_param': { 'field_name': 'TaxYear', 'style': 'form', 'explode': True }})
    

@dataclass
class GetJournalReportOuputHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetJournalReportOuputRequest:
    query_params: GetJournalReportOuputQueryParams = field(default=None)
    headers: GetJournalReportOuputHeaders = field(default=None)
    

@dataclass
class GetJournalReportOuputResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    get_journal_report_ouput_200_application_json_binary_string: Optional[bytes] = field(default=None)
    status_code: int = field(default=None)
    
