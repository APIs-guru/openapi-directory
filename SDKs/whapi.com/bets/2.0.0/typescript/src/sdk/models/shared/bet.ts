import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Leg } from "./leg";


export class Bet extends SpeakeasyBase {
  @Metadata({ data: "json, name=delayedBetId" })
  delayedBetId?: string;

  @Metadata({ data: "json, name=freeBetId" })
  freeBetId?: string;

  @Metadata({ data: "json, name=legs", elemType: shared.Leg })
  legs: Leg[];

  @Metadata({ data: "json, name=number" })
  number: number;

  @Metadata({ data: "json, name=stake" })
  stake: number;

  @Metadata({ data: "json, name=typeCode" })
  typeCode: string;
}
