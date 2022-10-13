from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetDomainsQueryParams:
    team_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'teamId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDomainsRequest:
    query_params: GetDomainsQueryParams = field(default=None)
    
class GetDomains200ApplicationJSONDomainsServiceTypeEnum(str, Enum):
    ZEIT_WORLD = "zeit.world"
    EXTERNAL = "external"
    NA = "na"


@dataclass_json
@dataclass
class GetDomains200ApplicationJSONDomains:
    bought_at: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boughtAt' }})
    cdn_enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cdnEnabled' }})
    created_at: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt' }})
    expires_at: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiresAt' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    intended_nameservers: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intendedNameservers' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    nameservers: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nameservers' }})
    ns_verified_at: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nsVerifiedAt' }})
    ordered_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderedAt' }})
    service_type: GetDomains200ApplicationJSONDomainsServiceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceType' }})
    transferred_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transferredAt' }})
    txt_verified_at: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'txtVerifiedAt' }})
    verification_record: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verificationRecord' }})
    verified: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verified' }})
    

@dataclass_json
@dataclass
class GetDomains200ApplicationJSON:
    domains: List[GetDomains200ApplicationJSONDomains] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domains' }})
    

@dataclass
class GetDomainsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_domains_200_application_json_object: Optional[GetDomains200ApplicationJSON] = field(default=None)
    
