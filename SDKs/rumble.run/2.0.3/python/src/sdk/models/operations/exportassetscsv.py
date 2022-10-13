from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ExportAssetsCsvQueryParams:
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class ExportAssetsCsvSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ExportAssetsCsvRequest:
    query_params: ExportAssetsCsvQueryParams = field(default=None)
    security: ExportAssetsCsvSecurity = field(default=None)
    

@dataclass
class ExportAssetsCsvResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    export_assets_csv_200_text_csv_binary_string: Optional[bytes] = field(default=None)
    
