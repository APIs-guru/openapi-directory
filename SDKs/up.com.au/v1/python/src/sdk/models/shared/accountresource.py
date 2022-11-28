from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccountResourceAttributes:
    account_type: Any = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountType') }})
    balance: MoneyObject = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('balance') }})
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    display_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    

@dataclass_json
@dataclass
class AccountResourceLinks:
    self: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('self') }})
    

@dataclass_json
@dataclass
class AccountResourceRelationshipsTransactionsLinks:
    related: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('related') }})
    

@dataclass_json
@dataclass
class AccountResourceRelationshipsTransactions:
    links: Optional[AccountResourceRelationshipsTransactionsLinks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    

@dataclass_json
@dataclass
class AccountResourceRelationships:
    transactions: AccountResourceRelationshipsTransactions = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactions') }})
    

@dataclass_json
@dataclass
class AccountResource:
    r"""AccountResource
    Provides information about an Up bank account.
    
    """
    
    attributes: AccountResourceAttributes = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('attributes') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    relationships: AccountResourceRelationships = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationships') }})
    type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    links: Optional[AccountResourceLinks] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('links') }})
    
