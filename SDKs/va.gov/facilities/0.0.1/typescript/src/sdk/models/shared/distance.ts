import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Distance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=distance" })
  distance: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}
