import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SingleBetRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=delayedBetId" })
  delayedBetId?: string;

  @Metadata({ data: "json, name=freeBetId" })
  freeBetId?: string;

  @Metadata({ data: "json, name=priceDen" })
  priceDen?: number;

  @Metadata({ data: "json, name=priceNum" })
  priceNum?: number;

  @Metadata({ data: "json, name=priceType" })
  priceType: string;

  @Metadata({ data: "json, name=selectionId" })
  selectionId: string;

  @Metadata({ data: "json, name=stake" })
  stake: number;

  @Metadata({ data: "json, name=type" })
  type: string;
}
