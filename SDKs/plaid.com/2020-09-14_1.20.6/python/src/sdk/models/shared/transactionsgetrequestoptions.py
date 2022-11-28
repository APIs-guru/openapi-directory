from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TransactionsGetRequestOptions:
    r"""TransactionsGetRequestOptions
    An optional object to be used with the request. If specified, `options` must not be `null`.
    """
    
    account_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_ids') }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    include_original_description: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('include_original_description') }})
    offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offset') }})
    
