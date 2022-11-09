import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TflApiPresentationEntitiesMode extends SpeakeasyBase {
  @Metadata({ data: "json, name=isFarePaying" })
  isFarePaying?: boolean;

  @Metadata({ data: "json, name=isScheduledService" })
  isScheduledService?: boolean;

  @Metadata({ data: "json, name=isTflService" })
  isTflService?: boolean;

  @Metadata({ data: "json, name=modeName" })
  modeName?: string;
}
