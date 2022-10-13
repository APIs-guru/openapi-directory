from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass
class TaxRatesByCountryCodeQueryParams:
    country_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'country_code', 'style': 'form', 'explode': True }})
    date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'date', 'style': 'form', 'explode': True }})
    domain: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'domain', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    product_codes_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'product_codes[]', 'style': 'form', 'explode': True }})
    province_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'province ', 'style': 'form', 'explode': True }})
    zip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'zip', 'style': 'form', 'explode': True }})
    

@dataclass
class TaxRatesByCountryCodeRequest:
    query_params: TaxRatesByCountryCodeQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class TaxRatesByCountryCode200ApplicationJSONTaxes:
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Country' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    data_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data_name' }})
    data_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data_value' }})
    

@dataclass_json
@dataclass
class TaxRatesByCountryCode200ApplicationJSON:
    country_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country_name' }})
    taxes: Optional[List[TaxRatesByCountryCode200ApplicationJSONTaxes]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxes' }})
    

@dataclass_json
@dataclass
class TaxRatesByCountryCode500ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class TaxRatesByCountryCodeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    tax_rates_by_country_code_200_application_json_object: Optional[TaxRatesByCountryCode200ApplicationJSON] = field(default=None)
    tax_rates_by_country_code_500_application_json_object: Optional[TaxRatesByCountryCode500ApplicationJSON] = field(default=None)
    
