from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ItemImportRequestOptions:
    r"""ItemImportRequestOptions
    An optional object to configure `/item/import` request.
    """
    
    webhook: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhook') }})
    
