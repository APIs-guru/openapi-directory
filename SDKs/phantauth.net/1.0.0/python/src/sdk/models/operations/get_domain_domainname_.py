from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetDomainDomainnamePathParams:
    domainname: str = field(default=None, metadata={'path_param': { 'field_name': 'domainname', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDomainDomainnameRequest:
    path_params: GetDomainDomainnamePathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetDomainDomainname200ApplicationJSON:
    at_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@id' }})
    logo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logo' }})
    members: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    profile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profile' }})
    sub: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sub' }})
    

@dataclass
class GetDomainDomainnameResponse:
    content_type: str = field(default=None)
    get_domain_domainname_200_application_json_object: Optional[GetDomainDomainname200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
