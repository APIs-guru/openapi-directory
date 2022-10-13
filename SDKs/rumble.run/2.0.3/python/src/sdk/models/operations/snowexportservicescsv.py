from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SnowExportServicesCsvSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class SnowExportServicesCsvRequest:
    security: SnowExportServicesCsvSecurity = field(default=None)
    

@dataclass
class SnowExportServicesCsvResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    snow_export_services_csv_200_text_csv_binary_string: Optional[bytes] = field(default=None)
    
