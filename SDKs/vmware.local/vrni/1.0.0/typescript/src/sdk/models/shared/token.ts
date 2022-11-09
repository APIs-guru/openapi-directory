import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Token extends SpeakeasyBase {
  @Metadata({ data: "json, name=expiry" })
  expiry?: number;

  @Metadata({ data: "json, name=token" })
  token?: string;
}
