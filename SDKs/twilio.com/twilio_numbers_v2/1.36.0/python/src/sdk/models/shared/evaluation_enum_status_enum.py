from dataclasses import dataclass, field
from typing import Enum

class EvaluationEnumStatusEnum(str, Enum):
    COMPLIANT = "compliant"
    NONCOMPLIANT = "noncompliant"

