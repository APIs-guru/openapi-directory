from dataclasses import dataclass, field
from enum import Enum

class FactorEnumTotpAlgorithmsEnum(str, Enum):
    SHA1 = "sha1"
    SHA256 = "sha256"
    SHA512 = "sha512"

