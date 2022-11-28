from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetDomainsQueryParams:
    team_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'teamId', 'style': 'form', 'explode': True }})
    
class GetDomains200ApplicationJSONDomainsServiceTypeEnum(str, Enum):
    ZEIT_WORLD = "zeit.world"
    EXTERNAL = "external"
    NA = "na"


@dataclass_json
@dataclass
class GetDomains200ApplicationJSONDomains:
    bought_at: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('boughtAt') }})
    cdn_enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cdnEnabled') }})
    created_at: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt') }})
    expires_at: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiresAt') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    intended_nameservers: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('intendedNameservers') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    nameservers: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameservers') }})
    ns_verified_at: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nsVerifiedAt') }})
    service_type: GetDomains200ApplicationJSONDomainsServiceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceType') }})
    txt_verified_at: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('txtVerifiedAt') }})
    verification_record: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('verificationRecord') }})
    verified: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('verified') }})
    ordered_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderedAt') }})
    transferred_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferredAt') }})
    

@dataclass_json
@dataclass
class GetDomains200ApplicationJSON:
    domains: List[GetDomains200ApplicationJSONDomains] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domains') }})
    

@dataclass
class GetDomainsRequest:
    query_params: GetDomainsQueryParams = field()
    

@dataclass
class GetDomainsResponse:
    content_type: str = field()
    status_code: int = field()
    get_domains_200_application_json_object: Optional[GetDomains200ApplicationJSON] = field(default=None)
    
