from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AssetReportRemoveRequest:
    r"""AssetReportRemoveRequest
    AssetReportRemoveRequest defines the request schema for `/asset_report/remove`
    """
    
    asset_report_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset_report_token') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
