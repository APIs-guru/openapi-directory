import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LogRestApiPost extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;
}
