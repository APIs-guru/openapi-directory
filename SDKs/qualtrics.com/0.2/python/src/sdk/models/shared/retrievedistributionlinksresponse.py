from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RetrieveDistributionLinksResponseMeta:
    http_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('httpStatus') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    

@dataclass_json
@dataclass
class RetrieveDistributionLinksResponseResultElements:
    contact_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactId') }})
    email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    exceeded_contact_frequency: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('exceededContactFrequency') }})
    external_data_reference: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('externalDataReference') }})
    first_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    last_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    link: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('link') }})
    link_expiration: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkExpiration') }})
    status: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    transaction_id: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionId') }})
    unsubscribed: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('unsubscribed') }})
    

@dataclass_json
@dataclass
class RetrieveDistributionLinksResponseResult:
    elements: Optional[List[RetrieveDistributionLinksResponseResultElements]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elements') }})
    next_page: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPage') }})
    

@dataclass_json
@dataclass
class RetrieveDistributionLinksResponse:
    meta: Optional[RetrieveDistributionLinksResponseMeta] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meta') }})
    result: Optional[RetrieveDistributionLinksResponseResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    
