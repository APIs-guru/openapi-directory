import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SuperFundTypeEnum } from "./superfundtypeenum";
import { ValidationError } from "./validationerror";



export class SuperFund extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ABN" })
  abn?: string;

  @SpeakeasyMetadata({ data: "json, name=AccountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=AccountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=BSB" })
  bsb?: string;

  @SpeakeasyMetadata({ data: "json, name=ElectronicServiceAddress" })
  electronicServiceAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=EmployerNumber" })
  employerNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SPIN" })
  spin?: string;

  @SpeakeasyMetadata({ data: "json, name=SuperFundID" })
  superFundId?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: SuperFundTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=USI" })
  usi?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedDateUTC" })
  updatedDateUtc?: string;

  @SpeakeasyMetadata({ data: "json, name=ValidationErrors", elemType: ValidationError })
  validationErrors?: ValidationError[];
}


export class SuperFundInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ABN" })
  abn?: string;

  @SpeakeasyMetadata({ data: "json, name=AccountName" })
  accountName?: string;

  @SpeakeasyMetadata({ data: "json, name=AccountNumber" })
  accountNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=BSB" })
  bsb?: string;

  @SpeakeasyMetadata({ data: "json, name=ElectronicServiceAddress" })
  electronicServiceAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=EmployerNumber" })
  employerNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=SPIN" })
  spin?: string;

  @SpeakeasyMetadata({ data: "json, name=SuperFundID" })
  superFundId?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: SuperFundTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=USI" })
  usi?: string;

  @SpeakeasyMetadata({ data: "json, name=ValidationErrors", elemType: ValidationError })
  validationErrors?: ValidationError[];
}
