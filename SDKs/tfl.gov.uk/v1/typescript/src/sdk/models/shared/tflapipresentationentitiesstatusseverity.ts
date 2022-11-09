import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TflApiPresentationEntitiesStatusSeverity extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=modeName" })
  modeName?: string;

  @Metadata({ data: "json, name=severityLevel" })
  severityLevel?: number;
}
