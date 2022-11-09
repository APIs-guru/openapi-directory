import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DeductionTypeDeductionCategoryEnum {
    None = "NONE"
,    Unionfees = "UNIONFEES"
,    Workplacegiving = "WORKPLACEGIVING"
}


export class DeductionType extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountCode" })
  accountCode?: string;

  @Metadata({ data: "json, name=CurrentRecord" })
  currentRecord?: boolean;

  @Metadata({ data: "json, name=DeductionCategory" })
  deductionCategory?: DeductionTypeDeductionCategoryEnum;

  @Metadata({ data: "json, name=DeductionTypeID" })
  deductionTypeId?: string;

  @Metadata({ data: "json, name=IsExemptFromW1" })
  isExemptFromW1?: boolean;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ReducesSuper" })
  reducesSuper?: boolean;

  @Metadata({ data: "json, name=ReducesTax" })
  reducesTax?: boolean;

  @Metadata({ data: "json, name=UpdatedDateUTC" })
  updatedDateUtc?: string;
}
