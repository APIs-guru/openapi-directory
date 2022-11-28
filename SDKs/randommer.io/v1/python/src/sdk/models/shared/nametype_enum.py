from dataclasses import dataclass, field
from enum import Enum

class NameTypeEnum(str, Enum):
    FIRSTNAME = "firstname"
    SURNAME = "surname"
    FULLNAME = "fullname"

