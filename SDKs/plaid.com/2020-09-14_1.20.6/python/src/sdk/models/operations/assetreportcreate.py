from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class AssetReportCreateRequest:
    request: shared.AssetReportCreateRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AssetReportCreateResponse:
    content_type: str = field()
    status_code: int = field()
    asset_report_create_response: Optional[dict[str, Any]] = field(default=None)
    
