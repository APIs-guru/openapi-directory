from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetDomainPathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDomainQueryParams:
    team_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'teamId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDomainRequest:
    path_params: GetDomainPathParams = field(default=None)
    query_params: GetDomainQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetDomain200ApplicationJSONDomainAliases:
    alias: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alias' }})
    created: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class GetDomain200ApplicationJSONDomainCerts:
    cns: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cns' }})
    created: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class GetDomain200ApplicationJSONDomainCreator:
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerId' }})
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_domain_reseller: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDomainReseller' }})
    username: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    
class GetDomain200ApplicationJSONDomainServiceTypeEnum(str, Enum):
    ZEIT_WORLD = "zeit.world"
    EXTERNAL = "external"
    NA = "na"


@dataclass_json
@dataclass
class GetDomain200ApplicationJSONDomain:
    aliases: List[GetDomain200ApplicationJSONDomainAliases] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aliases' }})
    bought_at: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boughtAt' }})
    cdn_enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cdnEnabled' }})
    certs: List[GetDomain200ApplicationJSONDomainCerts] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'certs' }})
    created_at: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt' }})
    creator: GetDomain200ApplicationJSONDomainCreator = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creator' }})
    expires_at: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expiresAt' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    intended_nameservers: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intendedNameservers' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    nameservers: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nameservers' }})
    ns_verified_at: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nsVerifiedAt' }})
    ordered_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderedAt' }})
    service_type: GetDomain200ApplicationJSONDomainServiceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceType' }})
    suffix: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suffix' }})
    transferred_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transferredAt' }})
    txt_verified_at: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'txtVerifiedAt' }})
    verification_record: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verificationRecord' }})
    verified: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verified' }})
    

@dataclass_json
@dataclass
class GetDomain200ApplicationJSON:
    domain: GetDomain200ApplicationJSONDomain = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    
class GetDomain404ApplicationJSONErrorCodeEnum(str, Enum):
    NOT_FOUND = "not_found"


@dataclass_json
@dataclass
class GetDomain404ApplicationJSONError:
    code: GetDomain404ApplicationJSONErrorCodeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class GetDomain404ApplicationJSON:
    error: GetDomain404ApplicationJSONError = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    

@dataclass
class GetDomainResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_domain_200_application_json_object: Optional[GetDomain200ApplicationJSON] = field(default=None)
    get_domain_404_application_json_object: Optional[GetDomain404ApplicationJSON] = field(default=None)
    
