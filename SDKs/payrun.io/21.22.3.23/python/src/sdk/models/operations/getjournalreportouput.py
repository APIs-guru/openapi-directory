from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetJournalReportOuputQueryParams:
    employer_key: str = field(metadata={'query_param': { 'field_name': 'EmployerKey', 'style': 'form', 'explode': True }})
    ledger_target: str = field(metadata={'query_param': { 'field_name': 'LedgerTarget', 'style': 'form', 'explode': True }})
    pay_frequency: str = field(metadata={'query_param': { 'field_name': 'PayFrequency', 'style': 'form', 'explode': True }})
    tax_year: str = field(metadata={'query_param': { 'field_name': 'TaxYear', 'style': 'form', 'explode': True }})
    tax_period: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'TaxPeriod', 'style': 'form', 'explode': True }})
    

@dataclass
class GetJournalReportOuputHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetJournalReportOuputRequest:
    headers: GetJournalReportOuputHeaders = field()
    query_params: GetJournalReportOuputQueryParams = field()
    

@dataclass
class GetJournalReportOuputResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    get_journal_report_ouput_200_application_json_binary_string: Optional[bytes] = field(default=None)
    
