from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import account
from . import category
from . import categorygroup
from . import currencyformat
from . import dateformat
from . import monthdetail
from . import payeelocation
from . import payee
from . import scheduledsubtransaction
from . import scheduledtransactionsummary
from . import subtransaction
from . import transactionsummary


@dataclass_json
@dataclass
class BudgetDetail:
    accounts: Optional[List[account.Account]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accounts' }})
    categories: Optional[List[category.Category]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'categories' }})
    category_groups: Optional[List[categorygroup.CategoryGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category_groups' }})
    currency_format: Optional[currencyformat.CurrencyFormat] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency_format' }})
    date_format: Optional[dateformat.DateFormat] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_format' }})
    first_month: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_month', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_modified_on: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_modified_on', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_month: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_month', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    months: Optional[List[monthdetail.MonthDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'months' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    payee_locations: Optional[List[payeelocation.PayeeLocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payee_locations' }})
    payees: Optional[List[payee.Payee]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payees' }})
    scheduled_subtransactions: Optional[List[scheduledsubtransaction.ScheduledSubTransaction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduled_subtransactions' }})
    scheduled_transactions: Optional[List[scheduledtransactionsummary.ScheduledTransactionSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduled_transactions' }})
    subtransactions: Optional[List[subtransaction.SubTransaction]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtransactions' }})
    transactions: Optional[List[transactionsummary.TransactionSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactions' }})
    
