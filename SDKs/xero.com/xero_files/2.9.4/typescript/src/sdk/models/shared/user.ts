import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class User extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirstName" })
  firstName?: string;

  @Metadata({ data: "json, name=FullName" })
  fullName?: string;

  @Metadata({ data: "json, name=Id" })
  id: string;

  @Metadata({ data: "json, name=LastName" })
  lastName?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
