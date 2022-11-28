import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Campaign extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
