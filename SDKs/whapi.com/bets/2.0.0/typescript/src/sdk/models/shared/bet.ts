import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Leg } from "./leg";



export class Bet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delayedBetId" })
  delayedBetId?: string;

  @SpeakeasyMetadata({ data: "json, name=freeBetId" })
  freeBetId?: string;

  @SpeakeasyMetadata({ data: "json, name=legs", elemType: Leg })
  legs: Leg[];

  @SpeakeasyMetadata({ data: "json, name=number" })
  number: number;

  @SpeakeasyMetadata({ data: "json, name=stake" })
  stake: number;

  @SpeakeasyMetadata({ data: "json, name=typeCode" })
  typeCode: string;
}
