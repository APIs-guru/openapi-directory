import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TflApiPresentationEntitiesStatusSeverity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=modeName" })
  modeName?: string;

  @SpeakeasyMetadata({ data: "json, name=severityLevel" })
  severityLevel?: number;
}
