from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExportSitesCsvSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ExportSitesCsvRequest:
    security: ExportSitesCsvSecurity = field()
    

@dataclass
class ExportSitesCsvResponse:
    content_type: str = field()
    status_code: int = field()
    export_sites_csv_200_text_csv_binary_string: Optional[bytes] = field(default=None)
    
