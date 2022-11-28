import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TflApiPresentationEntitiesMode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isFarePaying" })
  isFarePaying?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isScheduledService" })
  isScheduledService?: boolean;

  @SpeakeasyMetadata({ data: "json, name=isTflService" })
  isTflService?: boolean;

  @SpeakeasyMetadata({ data: "json, name=modeName" })
  modeName?: string;
}
