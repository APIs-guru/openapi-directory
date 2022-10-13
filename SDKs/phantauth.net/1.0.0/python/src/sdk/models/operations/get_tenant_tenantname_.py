from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetTenantTenantnamePathParams:
    tenantname: str = field(default=None, metadata={'path_param': { 'field_name': 'tenantname', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTenantTenantnameRequest:
    path_params: GetTenantTenantnamePathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetTenantTenantname200ApplicationJSON:
    at_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': '@id' }})
    about: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'about' }})
    attribution: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attribution' }})
    depot: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'depot' }})
    depots: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'depots' }})
    domain: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    factories: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'factories' }})
    factory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'factory' }})
    favicon: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'favicon' }})
    issuer: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'issuer' }})
    logo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logo' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script' }})
    sheet: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sheet' }})
    sub: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sub' }})
    subtenant: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtenant' }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'summary' }})
    template: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template' }})
    theme: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'theme' }})
    userinfo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userinfo' }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'website' }})
    

@dataclass
class GetTenantTenantnameResponse:
    content_type: str = field(default=None)
    get_tenant_tenantname_200_application_json_object: Optional[GetTenantTenantname200ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
