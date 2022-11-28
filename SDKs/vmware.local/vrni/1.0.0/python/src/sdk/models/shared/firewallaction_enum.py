from dataclasses import dataclass, field
from enum import Enum

class FirewallActionEnum(str, Enum):
    ALLOW = "ALLOW"
    ACCEPT = "ACCEPT"
    DENY = "DENY"
    DROP = "DROP"
    REJECT = "REJECT"
    REDIRECT = "REDIRECT"
    DO_NOT_REDIRECT = "DO_NOT_REDIRECT"

