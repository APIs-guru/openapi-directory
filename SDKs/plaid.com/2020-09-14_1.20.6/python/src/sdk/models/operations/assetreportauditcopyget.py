from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class AssetReportAuditCopyGetRequest:
    request: shared.AssetReportAuditCopyGetRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AssetReportAuditCopyGetResponse:
    content_type: str = field()
    status_code: int = field()
    asset_report_get_response: Optional[dict[str, Any]] = field(default=None)
    
