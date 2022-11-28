from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AssetReportRefreshRequest:
    r"""AssetReportRefreshRequest
    AssetReportRefreshRequest defines the request schema for `/asset_report/refresh`
    """
    
    asset_report_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset_report_token') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    days_requested: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('days_requested') }})
    options: Optional[AssetReportRefreshRequestOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('options') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
