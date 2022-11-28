import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TflApiPresentationEntitiesAccidentStatsCasualty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=age" })
  age?: number;

  @SpeakeasyMetadata({ data: "json, name=ageBand" })
  ageBand?: string;

  @SpeakeasyMetadata({ data: "json, name=class" })
  class?: string;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: string;
}
