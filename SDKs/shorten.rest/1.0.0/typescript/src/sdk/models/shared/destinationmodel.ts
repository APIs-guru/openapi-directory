import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DestinationModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=os" })
  os?: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}
