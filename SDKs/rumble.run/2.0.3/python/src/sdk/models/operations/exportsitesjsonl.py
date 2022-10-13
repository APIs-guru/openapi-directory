from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ExportSitesJsonlQueryParams:
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class ExportSitesJsonlSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ExportSitesJsonlRequest:
    query_params: ExportSitesJsonlQueryParams = field(default=None)
    security: ExportSitesJsonlSecurity = field(default=None)
    

@dataclass
class ExportSitesJsonlResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    export_sites_jsonl_200_application_json_binary_string: Optional[bytes] = field(default=None)
    
