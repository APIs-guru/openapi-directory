import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Domain } from "./domain";



export class UserCredential extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: Domain;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
