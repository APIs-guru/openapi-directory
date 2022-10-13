from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class AssetReportFilterRequest:
    request: shared.AssetReportFilterRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AssetReportFilterResponse:
    asset_report_filter_response: Optional[dict[str, Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
