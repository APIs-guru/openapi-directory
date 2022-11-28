from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AssetReportAuditCopyRemoveRequest:
    r"""AssetReportAuditCopyRemoveRequest
    AssetReportAuditCopyRemoveRequest defines the request schema for `/asset_report/audit_copy/remove`
    """
    
    audit_copy_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('audit_copy_token') }})
    client_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('client_id') }})
    secret: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secret') }})
    
