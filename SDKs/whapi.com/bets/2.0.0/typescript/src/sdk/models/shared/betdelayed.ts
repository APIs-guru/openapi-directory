import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BetDelayed extends SpeakeasyBase {
  @Metadata({ data: "json, name=delayPeriodSeconds" })
  delayPeriodSeconds: number;

  @Metadata({ data: "json, name=delayedBetId" })
  delayedBetId: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=number" })
  number?: number;
}
