import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=FullName" })
  fullName?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=LastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
