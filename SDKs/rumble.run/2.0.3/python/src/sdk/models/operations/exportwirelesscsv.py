from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ExportWirelessCsvQueryParams:
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class ExportWirelessCsvSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ExportWirelessCsvRequest:
    query_params: ExportWirelessCsvQueryParams = field(default=None)
    security: ExportWirelessCsvSecurity = field(default=None)
    

@dataclass
class ExportWirelessCsvResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    export_wireless_csv_200_text_csv_binary_string: Optional[bytes] = field(default=None)
    
