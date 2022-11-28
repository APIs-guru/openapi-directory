import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TflApiPresentationEntitiesPredictionTiming extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countdownServerAdjustment" })
  countdownServerAdjustment?: string;

  @SpeakeasyMetadata({ data: "json, name=insert" })
  insert?: Date;

  @SpeakeasyMetadata({ data: "json, name=read" })
  read?: Date;

  @SpeakeasyMetadata({ data: "json, name=received" })
  received?: Date;

  @SpeakeasyMetadata({ data: "json, name=sent" })
  sent?: Date;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: Date;
}
