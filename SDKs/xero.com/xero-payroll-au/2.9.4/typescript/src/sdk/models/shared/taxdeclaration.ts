import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EmploymentBasisEnum } from "./employmentbasisenum";
import { ResidencyStatusEnum } from "./residencystatusenum";
import { TfnExemptionTypeEnum } from "./tfnexemptiontypeenum";



export class TaxDeclaration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApprovedWithholdingVariationPercentage" })
  approvedWithholdingVariationPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=AustralianResidentForTaxPurposes" })
  australianResidentForTaxPurposes?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EligibleToReceiveLeaveLoading" })
  eligibleToReceiveLeaveLoading?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EmployeeID" })
  employeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=EmploymentBasis" })
  employmentBasis?: EmploymentBasisEnum;

  @SpeakeasyMetadata({ data: "json, name=HasHELPDebt" })
  hasHelpDebt?: boolean;

  @SpeakeasyMetadata({ data: "json, name=HasSFSSDebt" })
  hasSfssDebt?: boolean;

  @SpeakeasyMetadata({ data: "json, name=HasStudentStartupLoan" })
  hasStudentStartupLoan?: boolean;

  @SpeakeasyMetadata({ data: "json, name=HasTradeSupportLoanDebt" })
  hasTradeSupportLoanDebt?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ResidencyStatus" })
  residencyStatus?: ResidencyStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=TFNExemptionType" })
  tfnExemptionType?: TfnExemptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=TaxFileNumber" })
  taxFileNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=TaxFreeThresholdClaimed" })
  taxFreeThresholdClaimed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=TaxOffsetEstimatedAmount" })
  taxOffsetEstimatedAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=UpdatedDateUTC" })
  updatedDateUtc?: string;

  @SpeakeasyMetadata({ data: "json, name=UpwardVariationTaxWithholdingAmount" })
  upwardVariationTaxWithholdingAmount?: number;
}


export class TaxDeclarationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApprovedWithholdingVariationPercentage" })
  approvedWithholdingVariationPercentage?: number;

  @SpeakeasyMetadata({ data: "json, name=AustralianResidentForTaxPurposes" })
  australianResidentForTaxPurposes?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EligibleToReceiveLeaveLoading" })
  eligibleToReceiveLeaveLoading?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EmployeeID" })
  employeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=EmploymentBasis" })
  employmentBasis?: EmploymentBasisEnum;

  @SpeakeasyMetadata({ data: "json, name=HasHELPDebt" })
  hasHelpDebt?: boolean;

  @SpeakeasyMetadata({ data: "json, name=HasSFSSDebt" })
  hasSfssDebt?: boolean;

  @SpeakeasyMetadata({ data: "json, name=HasStudentStartupLoan" })
  hasStudentStartupLoan?: boolean;

  @SpeakeasyMetadata({ data: "json, name=HasTradeSupportLoanDebt" })
  hasTradeSupportLoanDebt?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ResidencyStatus" })
  residencyStatus?: ResidencyStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=TFNExemptionType" })
  tfnExemptionType?: TfnExemptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=TaxFileNumber" })
  taxFileNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=TaxFreeThresholdClaimed" })
  taxFreeThresholdClaimed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=TaxOffsetEstimatedAmount" })
  taxOffsetEstimatedAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=UpwardVariationTaxWithholdingAmount" })
  upwardVariationTaxWithholdingAmount?: number;
}
