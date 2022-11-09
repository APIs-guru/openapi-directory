import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Segment } from "./segment";


export class Itinerary extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseFareUSD" })
  baseFareUsd?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=segments", elemType: shared.Segment })
  segments: Segment[];

  @Metadata({ data: "json, name=ticketingCarrier" })
  ticketingCarrier?: string;
}
