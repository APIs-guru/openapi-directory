import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AppRole extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowedMemberTypes" })
  allowedMemberTypes?: string[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=isEnabled" })
  isEnabled?: boolean;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
