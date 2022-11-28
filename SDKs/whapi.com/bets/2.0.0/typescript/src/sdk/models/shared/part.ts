import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Part extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=includeInMultiple" })
  includeInMultiple: boolean;

  @SpeakeasyMetadata({ data: "json, name=priceDen" })
  priceDen: number;

  @SpeakeasyMetadata({ data: "json, name=priceNum" })
  priceNum: number;

  @SpeakeasyMetadata({ data: "json, name=priceType" })
  priceType: number;

  @SpeakeasyMetadata({ data: "json, name=selectionId" })
  selectionId: number;
}
