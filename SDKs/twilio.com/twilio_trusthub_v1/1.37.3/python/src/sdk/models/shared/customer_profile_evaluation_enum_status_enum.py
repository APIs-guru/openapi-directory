from dataclasses import dataclass, field
from enum import Enum

class CustomerProfileEvaluationEnumStatusEnum(str, Enum):
    COMPLIANT = "compliant"
    NONCOMPLIANT = "noncompliant"

