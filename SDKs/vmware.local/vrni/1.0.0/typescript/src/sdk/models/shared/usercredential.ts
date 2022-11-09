import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Domain } from "./domain";


export class UserCredential extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain?: Domain;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
