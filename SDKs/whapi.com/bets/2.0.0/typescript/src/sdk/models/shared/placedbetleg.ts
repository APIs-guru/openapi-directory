import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PlacedBetPart } from "./placedbetpart";



export class PlacedBetLeg extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=number" })
  number: number;

  @SpeakeasyMetadata({ data: "json, name=parts", elemType: PlacedBetPart })
  parts: PlacedBetPart[];

  @SpeakeasyMetadata({ data: "json, name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
