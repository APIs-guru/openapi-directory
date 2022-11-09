import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SuperFundTypeEnum } from "./superfundtypeenum";
import { ValidationError } from "./validationerror";


export class SuperFund extends SpeakeasyBase {
  @Metadata({ data: "json, name=ABN" })
  abn?: string;

  @Metadata({ data: "json, name=AccountName" })
  accountName?: string;

  @Metadata({ data: "json, name=AccountNumber" })
  accountNumber?: string;

  @Metadata({ data: "json, name=BSB" })
  bsb?: string;

  @Metadata({ data: "json, name=ElectronicServiceAddress" })
  electronicServiceAddress?: string;

  @Metadata({ data: "json, name=EmployerNumber" })
  employerNumber?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=SPIN" })
  spin?: string;

  @Metadata({ data: "json, name=SuperFundID" })
  superFundId?: string;

  @Metadata({ data: "json, name=Type" })
  type: SuperFundTypeEnum;

  @Metadata({ data: "json, name=USI" })
  usi?: string;

  @Metadata({ data: "json, name=UpdatedDateUTC" })
  updatedDateUtc?: string;

  @Metadata({ data: "json, name=ValidationErrors", elemType: shared.ValidationError })
  validationErrors?: ValidationError[];
}
