import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Level extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=names" })
  names?: Map<string, string>;
}
