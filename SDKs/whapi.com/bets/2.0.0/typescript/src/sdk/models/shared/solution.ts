import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Solution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=betNum" })
  betNum?: string;

  @SpeakeasyMetadata({ data: "json, name=eventId" })
  eventId?: string;

  @SpeakeasyMetadata({ data: "json, name=handicap" })
  handicap?: string;

  @SpeakeasyMetadata({ data: "json, name=handicapPrecision" })
  handicapPrecision?: string;

  @SpeakeasyMetadata({ data: "json, name=priceDen" })
  priceDen?: string;

  @SpeakeasyMetadata({ data: "json, name=priceNum" })
  priceNum?: string;

  @SpeakeasyMetadata({ data: "json, name=selectionHandicap" })
  selectionHandicap?: string;

  @SpeakeasyMetadata({ data: "json, name=selectionId" })
  selectionId?: string;
}
