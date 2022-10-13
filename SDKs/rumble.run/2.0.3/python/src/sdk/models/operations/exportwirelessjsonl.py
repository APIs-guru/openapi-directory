from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ExportWirelessJsonlQueryParams:
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class ExportWirelessJsonlSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ExportWirelessJsonlRequest:
    query_params: ExportWirelessJsonlQueryParams = field(default=None)
    security: ExportWirelessJsonlSecurity = field(default=None)
    

@dataclass
class ExportWirelessJsonlResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    export_wireless_jsonl_200_application_json_binary_string: Optional[bytes] = field(default=None)
    
