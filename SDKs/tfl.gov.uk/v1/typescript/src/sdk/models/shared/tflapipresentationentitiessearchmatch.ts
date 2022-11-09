import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TflApiPresentationEntitiesSearchMatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lat" })
  lat?: number;

  @Metadata({ data: "json, name=lon" })
  lon?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
