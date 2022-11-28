import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BetDelayed extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delayPeriodSeconds" })
  delayPeriodSeconds: number;

  @SpeakeasyMetadata({ data: "json, name=delayedBetId" })
  delayedBetId: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=number" })
  number?: number;
}
