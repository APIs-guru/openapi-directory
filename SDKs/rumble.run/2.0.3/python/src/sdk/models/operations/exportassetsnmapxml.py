from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExportAssetsNmapXMLQueryParams:
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class ExportAssetsNmapXMLSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ExportAssetsNmapXMLRequest:
    query_params: ExportAssetsNmapXMLQueryParams = field()
    security: ExportAssetsNmapXMLSecurity = field()
    

@dataclass
class ExportAssetsNmapXMLResponse:
    content_type: str = field()
    status_code: int = field()
    export_assets_nmap_xml_200_text_xml_binary_string: Optional[bytes] = field(default=None)
    
