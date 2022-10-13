from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ExportServicesCsvQueryParams:
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class ExportServicesCsvSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ExportServicesCsvRequest:
    query_params: ExportServicesCsvQueryParams = field(default=None)
    security: ExportServicesCsvSecurity = field(default=None)
    

@dataclass
class ExportServicesCsvResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    export_services_csv_200_text_csv_binary_string: Optional[bytes] = field(default=None)
    
