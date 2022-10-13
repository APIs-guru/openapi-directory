from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import loyaltyeventdatetimefilter
from . import loyaltyeventlocationfilter
from . import loyaltyeventloyaltyaccountfilter
from . import loyaltyeventorderfilter
from . import loyaltyeventtypefilter


@dataclass_json
@dataclass
class LoyaltyEventFilter:
    date_time_filter: Optional[loyaltyeventdatetimefilter.LoyaltyEventDateTimeFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_time_filter' }})
    location_filter: Optional[loyaltyeventlocationfilter.LoyaltyEventLocationFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_filter' }})
    loyalty_account_filter: Optional[loyaltyeventloyaltyaccountfilter.LoyaltyEventLoyaltyAccountFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loyalty_account_filter' }})
    order_filter: Optional[loyaltyeventorderfilter.LoyaltyEventOrderFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order_filter' }})
    type_filter: Optional[loyaltyeventtypefilter.LoyaltyEventTypeFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type_filter' }})
    
