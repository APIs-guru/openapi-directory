from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ExportSitesCsvSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ExportSitesCsvRequest:
    security: ExportSitesCsvSecurity = field(default=None)
    

@dataclass
class ExportSitesCsvResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    export_sites_csv_200_text_csv_binary_string: Optional[bytes] = field(default=None)
    
