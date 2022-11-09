import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TflApiPresentationEntitiesPredictionTiming extends SpeakeasyBase {
  @Metadata({ data: "json, name=countdownServerAdjustment" })
  countdownServerAdjustment?: string;

  @Metadata({ data: "json, name=insert" })
  insert?: Date;

  @Metadata({ data: "json, name=read" })
  read?: Date;

  @Metadata({ data: "json, name=received" })
  received?: Date;

  @Metadata({ data: "json, name=sent" })
  sent?: Date;

  @Metadata({ data: "json, name=source" })
  source?: Date;
}
