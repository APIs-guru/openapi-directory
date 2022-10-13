from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class GetCustomerPathParams:
    account: int = field(default=None, metadata={'path_param': { 'field_name': 'account', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCustomerRequest:
    path_params: GetCustomerPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetCustomer200ApplicationJSON:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    balance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'balance' }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    company_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company_name' }})
    company_website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company_website' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    creditlimit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creditlimit' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    fax: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fax' }})
    firstname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstname' }})
    lastname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastname' }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone' }})
    postcode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postcode' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    username: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    

@dataclass
class GetCustomerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_customer_200_application_json_object: Optional[GetCustomer200ApplicationJSON] = field(default=None)
    
