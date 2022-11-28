import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InsightsV1Call extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
