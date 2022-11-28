import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class IdentityBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=userName" })
  userName?: string;
}
