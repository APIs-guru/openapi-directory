import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EmploymentBasisEnum } from "./employmentbasisenum";
import { ResidencyStatusEnum } from "./residencystatusenum";
import { TfnExemptionTypeEnum } from "./tfnexemptiontypeenum";


export class TaxDeclaration extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApprovedWithholdingVariationPercentage" })
  approvedWithholdingVariationPercentage?: number;

  @Metadata({ data: "json, name=AustralianResidentForTaxPurposes" })
  australianResidentForTaxPurposes?: boolean;

  @Metadata({ data: "json, name=EligibleToReceiveLeaveLoading" })
  eligibleToReceiveLeaveLoading?: boolean;

  @Metadata({ data: "json, name=EmployeeID" })
  employeeId?: string;

  @Metadata({ data: "json, name=EmploymentBasis" })
  employmentBasis?: EmploymentBasisEnum;

  @Metadata({ data: "json, name=HasHELPDebt" })
  hasHelpDebt?: boolean;

  @Metadata({ data: "json, name=HasSFSSDebt" })
  hasSfssDebt?: boolean;

  @Metadata({ data: "json, name=HasStudentStartupLoan" })
  hasStudentStartupLoan?: boolean;

  @Metadata({ data: "json, name=HasTradeSupportLoanDebt" })
  hasTradeSupportLoanDebt?: boolean;

  @Metadata({ data: "json, name=ResidencyStatus" })
  residencyStatus?: ResidencyStatusEnum;

  @Metadata({ data: "json, name=TFNExemptionType" })
  tfnExemptionType?: TfnExemptionTypeEnum;

  @Metadata({ data: "json, name=TaxFileNumber" })
  taxFileNumber?: string;

  @Metadata({ data: "json, name=TaxFreeThresholdClaimed" })
  taxFreeThresholdClaimed?: boolean;

  @Metadata({ data: "json, name=TaxOffsetEstimatedAmount" })
  taxOffsetEstimatedAmount?: number;

  @Metadata({ data: "json, name=UpdatedDateUTC" })
  updatedDateUtc?: string;

  @Metadata({ data: "json, name=UpwardVariationTaxWithholdingAmount" })
  upwardVariationTaxWithholdingAmount?: number;
}
