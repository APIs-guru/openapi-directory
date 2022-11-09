import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Betslippart extends SpeakeasyBase {
  @Metadata({ data: "json, name=eachWayAvailable" })
  eachWayAvailable?: boolean;

  @Metadata({ data: "json, name=includeInMultiple" })
  includeInMultiple: boolean;

  @Metadata({ data: "json, name=legGroup" })
  legGroup?: number;

  @Metadata({ data: "json, name=priceChanged" })
  priceChanged?: boolean;

  @Metadata({ data: "json, name=priceDen" })
  priceDen: number;

  @Metadata({ data: "json, name=priceNum" })
  priceNum: number;

  @Metadata({ data: "json, name=priceType" })
  priceType: number;

  @Metadata({ data: "json, name=selectionId" })
  selectionId: number;

  @Metadata({ data: "json, name=singleAvailable" })
  singleAvailable?: boolean;

  @Metadata({ data: "json, name=startingPriceAvailable" })
  startingPriceAvailable?: boolean;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=statusChanged" })
  statusChanged?: boolean;
}
