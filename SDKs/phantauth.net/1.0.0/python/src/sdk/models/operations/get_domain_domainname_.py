from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetDomainDomainnamePathParams:
    domainname: str = field(metadata={'path_param': { 'field_name': 'domainname', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetDomainDomainname200ApplicationJSON:
    at_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('@id') }})
    logo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logo') }})
    members: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('members') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    profile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    sub: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sub') }})
    

@dataclass
class GetDomainDomainnameRequest:
    path_params: GetDomainDomainnamePathParams = field()
    

@dataclass
class GetDomainDomainnameResponse:
    content_type: str = field()
    status_code: int = field()
    get_domain_domainname_200_application_json_object: Optional[GetDomainDomainname200ApplicationJSON] = field(default=None)
    
