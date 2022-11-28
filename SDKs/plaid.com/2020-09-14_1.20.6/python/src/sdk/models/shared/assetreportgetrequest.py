from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AssetReportGetRequest:
    r"""AssetReportGetRequest
    AssetReportGetRequest defines the request schema for `/asset_report/get`
    """
    
    asset_report_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset_report_token') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    include_insights: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('include_insights') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
