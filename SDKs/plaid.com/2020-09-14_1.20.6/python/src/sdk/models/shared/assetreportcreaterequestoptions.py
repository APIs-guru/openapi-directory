from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AssetReportCreateRequestOptions:
    client_report_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'client_report_id' }})
    user: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    webhook: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhook' }})
    
