from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ExportAssetsNmapXMLQueryParams:
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class ExportAssetsNmapXMLSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ExportAssetsNmapXMLRequest:
    query_params: ExportAssetsNmapXMLQueryParams = field(default=None)
    security: ExportAssetsNmapXMLSecurity = field(default=None)
    

@dataclass
class ExportAssetsNmapXMLResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    export_assets_nmap_xml_200_text_xml_binary_string: Optional[bytes] = field(default=None)
    
