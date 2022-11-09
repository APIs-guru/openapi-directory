import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PlacedBetPart } from "./placedbetpart";


export class PlacedBetLeg extends SpeakeasyBase {
  @Metadata({ data: "json, name=number" })
  number: number;

  @Metadata({ data: "json, name=parts", elemType: shared.PlacedBetPart })
  parts: PlacedBetPart[];

  @Metadata({ data: "json, name=sort" })
  sort?: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
