import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class IdentityBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=userName" })
  userName?: string;
}
