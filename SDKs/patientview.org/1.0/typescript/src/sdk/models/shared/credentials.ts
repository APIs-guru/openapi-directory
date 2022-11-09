import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Credentials extends SpeakeasyBase {
  @Metadata({ data: "json, name=apiKey" })
  apiKey?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
