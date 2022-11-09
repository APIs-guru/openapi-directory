import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TflApiPresentationEntitiesAccidentStatsCasualty extends SpeakeasyBase {
  @Metadata({ data: "json, name=age" })
  age?: number;

  @Metadata({ data: "json, name=ageBand" })
  ageBand?: string;

  @Metadata({ data: "json, name=class" })
  class?: string;

  @Metadata({ data: "json, name=mode" })
  mode?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: string;
}
