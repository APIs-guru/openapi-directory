import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AddForwardedPortSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=isPublic" })
  isPublic?: boolean;
}
