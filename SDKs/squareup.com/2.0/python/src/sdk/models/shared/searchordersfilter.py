from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import searchorderscustomerfilter
from . import searchordersdatetimefilter
from . import searchordersfulfillmentfilter
from . import searchorderssourcefilter
from . import searchordersstatefilter


@dataclass_json
@dataclass
class SearchOrdersFilter:
    customer_filter: Optional[searchorderscustomerfilter.SearchOrdersCustomerFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer_filter' }})
    date_time_filter: Optional[searchordersdatetimefilter.SearchOrdersDateTimeFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_time_filter' }})
    fulfillment_filter: Optional[searchordersfulfillmentfilter.SearchOrdersFulfillmentFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fulfillment_filter' }})
    source_filter: Optional[searchorderssourcefilter.SearchOrdersSourceFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_filter' }})
    state_filter: Optional[searchordersstatefilter.SearchOrdersStateFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state_filter' }})
    
