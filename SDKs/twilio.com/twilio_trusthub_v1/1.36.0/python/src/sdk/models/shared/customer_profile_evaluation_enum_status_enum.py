from dataclasses import dataclass, field
from typing import Enum

class CustomerProfileEvaluationEnumStatusEnum(str, Enum):
    COMPLIANT = "compliant"
    NONCOMPLIANT = "noncompliant"

