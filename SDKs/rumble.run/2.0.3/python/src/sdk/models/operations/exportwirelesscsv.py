from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExportWirelessCsvQueryParams:
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class ExportWirelessCsvSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ExportWirelessCsvRequest:
    query_params: ExportWirelessCsvQueryParams = field()
    security: ExportWirelessCsvSecurity = field()
    

@dataclass
class ExportWirelessCsvResponse:
    content_type: str = field()
    status_code: int = field()
    export_wireless_csv_200_text_csv_binary_string: Optional[bytes] = field(default=None)
    
