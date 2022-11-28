from dataclasses import dataclass, field
from enum import Enum

class AuthorizedConnectAppEnumPermissionEnum(str, Enum):
    GET_ALL = "get-all"
    POST_ALL = "post-all"

