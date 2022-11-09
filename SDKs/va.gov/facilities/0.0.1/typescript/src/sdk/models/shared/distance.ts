import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Distance extends SpeakeasyBase {
  @Metadata({ data: "json, name=distance" })
  distance: number;

  @Metadata({ data: "json, name=id" })
  id: string;
}
