import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SingleBetRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delayedBetId" })
  delayedBetId?: string;

  @SpeakeasyMetadata({ data: "json, name=freeBetId" })
  freeBetId?: string;

  @SpeakeasyMetadata({ data: "json, name=priceDen" })
  priceDen?: number;

  @SpeakeasyMetadata({ data: "json, name=priceNum" })
  priceNum?: number;

  @SpeakeasyMetadata({ data: "json, name=priceType" })
  priceType: string;

  @SpeakeasyMetadata({ data: "json, name=selectionId" })
  selectionId: string;

  @SpeakeasyMetadata({ data: "json, name=stake" })
  stake: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
