import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PasswordCredentials extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username: string;
}
