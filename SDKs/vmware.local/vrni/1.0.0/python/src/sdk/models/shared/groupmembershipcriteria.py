from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import ipaddressmembershipcriteria
from . import searchmembershipcriteria

class GroupMembershipCriteriaMembershipTypeEnum(str, Enum):
    SEARCH_MEMBERSHIP_CRITERIA = "SearchMembershipCriteria"
    IP_ADDRESS_MEMBERSHIP_CRITERIA = "IPAddressMembershipCriteria"


@dataclass_json
@dataclass
class GroupMembershipCriteria:
    ip_address_membership_criteria: Optional[ipaddressmembershipcriteria.IPAddressMembershipCriteria] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip_address_membership_criteria' }})
    membership_type: Optional[GroupMembershipCriteriaMembershipTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'membership_type' }})
    search_membership_criteria: Optional[searchmembershipcriteria.SearchMembershipCriteria] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'search_membership_criteria' }})
    
