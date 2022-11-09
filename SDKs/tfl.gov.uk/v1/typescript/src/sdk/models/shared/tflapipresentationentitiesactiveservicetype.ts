import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TflApiPresentationEntitiesActiveServiceType extends SpeakeasyBase {
  @Metadata({ data: "json, name=mode" })
  mode?: string;

  @Metadata({ data: "json, name=serviceType" })
  serviceType?: string;
}
