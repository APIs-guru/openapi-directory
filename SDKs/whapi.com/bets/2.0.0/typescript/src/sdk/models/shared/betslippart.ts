import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Betslippart extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eachWayAvailable" })
  eachWayAvailable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=includeInMultiple" })
  includeInMultiple: boolean;

  @SpeakeasyMetadata({ data: "json, name=legGroup" })
  legGroup?: number;

  @SpeakeasyMetadata({ data: "json, name=priceChanged" })
  priceChanged?: boolean;

  @SpeakeasyMetadata({ data: "json, name=priceDen" })
  priceDen: number;

  @SpeakeasyMetadata({ data: "json, name=priceNum" })
  priceNum: number;

  @SpeakeasyMetadata({ data: "json, name=priceType" })
  priceType: number;

  @SpeakeasyMetadata({ data: "json, name=selectionId" })
  selectionId: number;

  @SpeakeasyMetadata({ data: "json, name=singleAvailable" })
  singleAvailable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=startingPriceAvailable" })
  startingPriceAvailable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=statusChanged" })
  statusChanged?: boolean;
}
