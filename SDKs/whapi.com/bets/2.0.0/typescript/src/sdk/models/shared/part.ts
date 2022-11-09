import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Part extends SpeakeasyBase {
  @Metadata({ data: "json, name=includeInMultiple" })
  includeInMultiple: boolean;

  @Metadata({ data: "json, name=priceDen" })
  priceDen: number;

  @Metadata({ data: "json, name=priceNum" })
  priceNum: number;

  @Metadata({ data: "json, name=priceType" })
  priceType: number;

  @Metadata({ data: "json, name=selectionId" })
  selectionId: number;
}
