import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RenewTokenRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken?: string;
}
