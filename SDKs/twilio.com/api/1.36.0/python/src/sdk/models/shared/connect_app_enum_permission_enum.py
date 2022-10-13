from dataclasses import dataclass, field
from typing import Enum

class ConnectAppEnumPermissionEnum(str, Enum):
    GET_ALL = "get-all"
    POST_ALL = "post-all"

