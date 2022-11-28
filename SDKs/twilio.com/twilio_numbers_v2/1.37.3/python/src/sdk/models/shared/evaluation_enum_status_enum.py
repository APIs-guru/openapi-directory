from dataclasses import dataclass, field
from enum import Enum

class EvaluationEnumStatusEnum(str, Enum):
    COMPLIANT = "compliant"
    NONCOMPLIANT = "noncompliant"

