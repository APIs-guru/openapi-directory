from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetDomainPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDomainQueryParams:
    team_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'teamId', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetDomain200ApplicationJSONDomainAliases:
    alias: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('alias') }})
    created: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class GetDomain200ApplicationJSONDomainCerts:
    cns: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cns') }})
    created: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('created') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class GetDomain200ApplicationJSONDomainCreator:
    r"""GetDomain200ApplicationJSONDomainCreator
    Information about who added the domain
    """
    
    email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    username: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerId') }})
    is_domain_reseller: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDomainReseller') }})
    
class GetDomain200ApplicationJSONDomainServiceTypeEnum(str, Enum):
    ZEIT_WORLD = "zeit.world"
    EXTERNAL = "external"
    NA = "na"


@dataclass_json
@dataclass
class GetDomain200ApplicationJSONDomain:
    r"""GetDomain200ApplicationJSONDomain
    The domain information
    """
    
    aliases: List[GetDomain200ApplicationJSONDomainAliases] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('aliases') }})
    bought_at: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('boughtAt') }})
    cdn_enabled: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('cdnEnabled') }})
    certs: List[GetDomain200ApplicationJSONDomainCerts] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('certs') }})
    created_at: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt') }})
    creator: GetDomain200ApplicationJSONDomainCreator = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('creator') }})
    expires_at: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('expiresAt') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    intended_nameservers: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('intendedNameservers') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    nameservers: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nameservers') }})
    ns_verified_at: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('nsVerifiedAt') }})
    service_type: GetDomain200ApplicationJSONDomainServiceTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceType') }})
    suffix: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('suffix') }})
    txt_verified_at: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('txtVerifiedAt') }})
    verification_record: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('verificationRecord') }})
    verified: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('verified') }})
    ordered_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderedAt') }})
    transferred_at: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transferredAt') }})
    

@dataclass_json
@dataclass
class GetDomain200ApplicationJSON:
    domain: GetDomain200ApplicationJSONDomain = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    
class GetDomain404ApplicationJSONErrorCodeEnum(str, Enum):
    NOT_FOUND = "not_found"


@dataclass_json
@dataclass
class GetDomain404ApplicationJSONError:
    code: GetDomain404ApplicationJSONErrorCodeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    message: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class GetDomain404ApplicationJSON:
    error: GetDomain404ApplicationJSONError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclass
class GetDomainRequest:
    path_params: GetDomainPathParams = field()
    query_params: GetDomainQueryParams = field()
    

@dataclass
class GetDomainResponse:
    content_type: str = field()
    status_code: int = field()
    get_domain_200_application_json_object: Optional[GetDomain200ApplicationJSON] = field(default=None)
    get_domain_404_application_json_object: Optional[GetDomain404ApplicationJSON] = field(default=None)
    
