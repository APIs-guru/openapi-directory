import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RevokeTokenResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=success" })
  success?: boolean;
}
