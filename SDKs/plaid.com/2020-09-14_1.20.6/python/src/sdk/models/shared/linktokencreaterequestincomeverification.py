from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class LinkTokenCreateRequestIncomeVerification:
    r"""LinkTokenCreateRequestIncomeVerification
    Specifies options for initializing Link for use with the Income (beta) product. This field is required if `income_verification` is included in the `products` array.
    """
    
    income_verification_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('income_verification_id') }})
    asset_report_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset_report_id') }})
    
