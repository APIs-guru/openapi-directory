from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SnowExportServicesCsvSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class SnowExportServicesCsvRequest:
    security: SnowExportServicesCsvSecurity = field()
    

@dataclass
class SnowExportServicesCsvResponse:
    content_type: str = field()
    status_code: int = field()
    snow_export_services_csv_200_text_csv_binary_string: Optional[bytes] = field(default=None)
    
