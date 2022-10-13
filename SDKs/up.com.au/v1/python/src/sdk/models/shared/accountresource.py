from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import moneyobject


@dataclass_json
@dataclass
class AccountResourceAttributes:
    account_type: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountType' }})
    balance: moneyobject.MoneyObject = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balance' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    display_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    

@dataclass_json
@dataclass
class AccountResourceLinks:
    self: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    

@dataclass_json
@dataclass
class AccountResourceRelationshipsTransactionsLinks:
    related: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'related' }})
    

@dataclass_json
@dataclass
class AccountResourceRelationshipsTransactions:
    links: Optional[AccountResourceRelationshipsTransactionsLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    

@dataclass_json
@dataclass
class AccountResourceRelationships:
    transactions: AccountResourceRelationshipsTransactions = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactions' }})
    

@dataclass_json
@dataclass
class AccountResource:
    attributes: AccountResourceAttributes = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attributes' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    links: Optional[AccountResourceLinks] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'links' }})
    relationships: AccountResourceRelationships = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationships' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
