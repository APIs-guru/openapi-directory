from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GroupMembershipCriteriaMembershipTypeEnum(str, Enum):
    SEARCH_MEMBERSHIP_CRITERIA = "SearchMembershipCriteria"
    IP_ADDRESS_MEMBERSHIP_CRITERIA = "IPAddressMembershipCriteria"


@dataclass_json
@dataclass
class GroupMembershipCriteria:
    r"""GroupMembershipCriteria
    EntityType currently restricted to VirtualMachine
    """
    
    ip_address_membership_criteria: Optional[IPAddressMembershipCriteria] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ip_address_membership_criteria') }})
    membership_type: Optional[GroupMembershipCriteriaMembershipTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('membership_type') }})
    search_membership_criteria: Optional[SearchMembershipCriteria] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('search_membership_criteria') }})
    
