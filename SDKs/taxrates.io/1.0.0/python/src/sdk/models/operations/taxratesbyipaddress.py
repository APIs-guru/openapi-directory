from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class TaxRatesByIPAddressQueryParams:
    domain: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'domain', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    ip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ip', 'style': 'form', 'explode': True }})
    product_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'product_code', 'style': 'form', 'explode': True }})
    zip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'zip', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class TaxRatesByIPAddress200ApplicationJSONTaxes:
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Country') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    data_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data_name') }})
    data_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data_value') }})
    

@dataclass_json
@dataclass
class TaxRatesByIPAddress200ApplicationJSON:
    country_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_name') }})
    taxes: Optional[List[TaxRatesByIPAddress200ApplicationJSONTaxes]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxes') }})
    

@dataclass_json
@dataclass
class TaxRatesByIPAddress500ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class TaxRatesByIPAddressRequest:
    query_params: TaxRatesByIPAddressQueryParams = field()
    

@dataclass
class TaxRatesByIPAddressResponse:
    content_type: str = field()
    status_code: int = field()
    tax_rates_by_ip_address_200_application_json_objects: Optional[List[TaxRatesByIPAddress200ApplicationJSON]] = field(default=None)
    tax_rates_by_ip_address_500_application_json_object: Optional[TaxRatesByIPAddress500ApplicationJSON] = field(default=None)
    
