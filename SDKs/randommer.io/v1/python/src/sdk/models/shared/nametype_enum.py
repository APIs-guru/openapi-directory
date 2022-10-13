from dataclasses import dataclass, field
from typing import Enum

class NameTypeEnum(str, Enum):
    FIRSTNAME = "firstname"
    SURNAME = "surname"
    FULLNAME = "fullname"

