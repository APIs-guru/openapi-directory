import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PriceFormatted } from "./priceformatted";


export class PlacedBetPart extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description: string;

  @Metadata({ data: "json, name=eachWayDen" })
  eachWayDen?: number;

  @Metadata({ data: "json, name=eachWayNum" })
  eachWayNum?: number;

  @Metadata({ data: "json, name=eachWayPlaces" })
  eachWayPlaces?: number;

  @Metadata({ data: "json, name=eventDescription" })
  eventDescription: string;

  @Metadata({ data: "json, name=eventId" })
  eventId: string;

  @Metadata({ data: "json, name=eventMarketDescription" })
  eventMarketDescription?: string;

  @Metadata({ data: "json, name=eventTypeDescription" })
  eventTypeDescription?: string;

  @Metadata({ data: "json, name=handicap" })
  handicap?: number;

  @Metadata({ data: "json, name=number" })
  number: number;

  @Metadata({ data: "json, name=priceDen" })
  priceDen: number;

  @Metadata({ data: "json, name=priceFormatted" })
  priceFormatted?: PriceFormatted;

  @Metadata({ data: "json, name=priceNum" })
  priceNum: number;

  @Metadata({ data: "json, name=priceType" })
  priceType: string;

  @Metadata({ data: "json, name=result" })
  result: string;

  @Metadata({ data: "json, name=rule4Deductions" })
  rule4Deductions?: number;

  @Metadata({ data: "json, name=selectionId" })
  selectionId?: string;

  @Metadata({ data: "json, name=startDateTime" })
  startDateTime: string;
}
