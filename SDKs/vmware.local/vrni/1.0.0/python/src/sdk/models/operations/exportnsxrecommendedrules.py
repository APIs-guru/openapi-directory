from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ExportNsxRecommendedRulesSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ExportNsxRecommendedRulesRequest:
    request: Optional[shared.RecommendedRulesRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: ExportNsxRecommendedRulesSecurity = field(default=None)
    

@dataclass
class ExportNsxRecommendedRulesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    export_nsx_recommended_rules_200_application_octet_stream_binary_string: Optional[bytes] = field(default=None)
    
