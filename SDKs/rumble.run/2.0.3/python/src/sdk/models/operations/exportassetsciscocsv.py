from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ExportAssetsCiscoCsvQueryParams:
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class ExportAssetsCiscoCsvSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ExportAssetsCiscoCsvRequest:
    query_params: ExportAssetsCiscoCsvQueryParams = field(default=None)
    security: ExportAssetsCiscoCsvSecurity = field(default=None)
    

@dataclass
class ExportAssetsCiscoCsvResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    export_assets_cisco_csv_200_text_csv_binary_string: Optional[bytes] = field(default=None)
    
