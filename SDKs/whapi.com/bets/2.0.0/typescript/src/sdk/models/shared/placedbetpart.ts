import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PriceFormatted } from "./priceformatted";



export class PlacedBetPart extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=eachWayDen" })
  eachWayDen?: number;

  @SpeakeasyMetadata({ data: "json, name=eachWayNum" })
  eachWayNum?: number;

  @SpeakeasyMetadata({ data: "json, name=eachWayPlaces" })
  eachWayPlaces?: number;

  @SpeakeasyMetadata({ data: "json, name=eventDescription" })
  eventDescription: string;

  @SpeakeasyMetadata({ data: "json, name=eventId" })
  eventId: string;

  @SpeakeasyMetadata({ data: "json, name=eventMarketDescription" })
  eventMarketDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=eventTypeDescription" })
  eventTypeDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=handicap" })
  handicap?: number;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number: number;

  @SpeakeasyMetadata({ data: "json, name=priceDen" })
  priceDen: number;

  @SpeakeasyMetadata({ data: "json, name=priceFormatted" })
  priceFormatted?: PriceFormatted;

  @SpeakeasyMetadata({ data: "json, name=priceNum" })
  priceNum: number;

  @SpeakeasyMetadata({ data: "json, name=priceType" })
  priceType: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: string;

  @SpeakeasyMetadata({ data: "json, name=rule4Deductions" })
  rule4Deductions?: number;

  @SpeakeasyMetadata({ data: "json, name=selectionId" })
  selectionId?: string;

  @SpeakeasyMetadata({ data: "json, name=startDateTime" })
  startDateTime: string;
}
