from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccountingSupplierParty:
    r"""AccountingSupplierParty
    The party sending the invoice. Most data for the AccountingSupplierParty is taken from the Storecove database, where your sender identity resides and has been validated. However, we provide a limited number of fields here that you can specify on an invoice-by-invoice basis.
    """
    
    party: Optional[SupplierParty] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('party') }})
    
