from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AssetReportRefreshRequestOptions:
    r"""AssetReportRefreshRequestOptions
    An optional object to filter `/asset_report/refresh` results. If provided, cannot be `null`. If not specified, the `options` from the original call to `/asset_report/create` will be used.
    """
    
    client_report_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_report_id') }})
    user: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    webhook: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhook') }})
    
