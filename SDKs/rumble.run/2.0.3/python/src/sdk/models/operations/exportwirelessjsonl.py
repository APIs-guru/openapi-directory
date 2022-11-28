from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExportWirelessJsonlQueryParams:
    fields: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search', 'style': 'form', 'explode': True }})
    

@dataclass
class ExportWirelessJsonlSecurity:
    bearer_auth: shared.SchemeBearerAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ExportWirelessJsonlRequest:
    query_params: ExportWirelessJsonlQueryParams = field()
    security: ExportWirelessJsonlSecurity = field()
    

@dataclass
class ExportWirelessJsonlResponse:
    content_type: str = field()
    status_code: int = field()
    export_wireless_jsonl_200_application_json_binary_string: Optional[bytes] = field(default=None)
    
