from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetTenantTenantnamePathParams:
    tenantname: str = field(metadata={'path_param': { 'field_name': 'tenantname', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetTenantTenantname200ApplicationJSON:
    issuer: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('issuer') }})
    sub: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sub') }})
    at_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@id') }})
    about: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('about') }})
    attribution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attribution') }})
    depot: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('depot') }})
    depots: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('depots') }})
    domain: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    factories: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('factories') }})
    factory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('factory') }})
    favicon: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('favicon') }})
    logo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    sheet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sheet') }})
    subtenant: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtenant') }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('summary') }})
    template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    theme: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('theme') }})
    userinfo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userinfo') }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('website') }})
    

@dataclass
class GetTenantTenantnameRequest:
    path_params: GetTenantTenantnamePathParams = field()
    

@dataclass
class GetTenantTenantnameResponse:
    content_type: str = field()
    status_code: int = field()
    get_tenant_tenantname_200_application_json_object: Optional[GetTenantTenantname200ApplicationJSON] = field(default=None)
    
