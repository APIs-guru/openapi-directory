from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class AssetReportRefreshRequest:
    request: shared.AssetReportRefreshRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AssetReportRefreshResponse:
    content_type: str = field()
    status_code: int = field()
    asset_report_refresh_response: Optional[dict[str, Any]] = field(default=None)
    
