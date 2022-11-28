import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LogRestApiPost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;
}
