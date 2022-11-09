import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Solution extends SpeakeasyBase {
  @Metadata({ data: "json, name=betNum" })
  betNum?: string;

  @Metadata({ data: "json, name=eventId" })
  eventId?: string;

  @Metadata({ data: "json, name=handicap" })
  handicap?: string;

  @Metadata({ data: "json, name=handicapPrecision" })
  handicapPrecision?: string;

  @Metadata({ data: "json, name=priceDen" })
  priceDen?: string;

  @Metadata({ data: "json, name=priceNum" })
  priceNum?: string;

  @Metadata({ data: "json, name=selectionHandicap" })
  selectionHandicap?: string;

  @Metadata({ data: "json, name=selectionId" })
  selectionId?: string;
}
