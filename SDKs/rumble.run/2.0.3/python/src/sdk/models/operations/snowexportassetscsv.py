from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SnowExportAssetsCsvSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class SnowExportAssetsCsvRequest:
    security: SnowExportAssetsCsvSecurity = field(default=None)
    

@dataclass
class SnowExportAssetsCsvResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    snow_export_assets_csv_200_text_csv_binary_string: Optional[bytes] = field(default=None)
    
