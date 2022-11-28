from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class AllTaxRatesQueryParams:
    product_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Product_code', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    domain: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'domain', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class AllTaxRates200ApplicationJSONRates:
    data_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data_name') }})
    data_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data_value') }})
    product_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product_code') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class AllTaxRates200ApplicationJSON:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rates: Optional[List[AllTaxRates200ApplicationJSONRates]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rates') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    zip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('zip') }})
    

@dataclass_json
@dataclass
class AllTaxRates500ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class AllTaxRatesRequest:
    query_params: AllTaxRatesQueryParams = field()
    

@dataclass
class AllTaxRatesResponse:
    content_type: str = field()
    status_code: int = field()
    all_tax_rates_200_application_json_objects: Optional[List[AllTaxRates200ApplicationJSON]] = field(default=None)
    all_tax_rates_500_application_json_object: Optional[AllTaxRates500ApplicationJSON] = field(default=None)
    
