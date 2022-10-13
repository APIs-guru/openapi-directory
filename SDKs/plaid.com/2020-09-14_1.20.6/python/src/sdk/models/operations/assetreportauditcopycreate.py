from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class AssetReportAuditCopyCreateRequest:
    request: shared.AssetReportAuditCopyCreateRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AssetReportAuditCopyCreateResponse:
    asset_report_audit_copy_create_response: Optional[dict[str, Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
