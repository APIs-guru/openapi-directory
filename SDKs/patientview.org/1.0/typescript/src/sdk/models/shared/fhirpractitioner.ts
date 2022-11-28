import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FhirContact } from "./fhircontact";



export class FhirPractitioner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address1" })
  address1?: string;

  @SpeakeasyMetadata({ data: "json, name=address2" })
  address2?: string;

  @SpeakeasyMetadata({ data: "json, name=address3" })
  address3?: string;

  @SpeakeasyMetadata({ data: "json, name=address4" })
  address4?: string;

  @SpeakeasyMetadata({ data: "json, name=allowInviteGp" })
  allowInviteGp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=contacts", elemType: FhirContact })
  contacts?: FhirContact[];

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender?: string;

  @SpeakeasyMetadata({ data: "json, name=groupCode" })
  groupCode?: string;

  @SpeakeasyMetadata({ data: "json, name=identifier" })
  identifier?: string;

  @SpeakeasyMetadata({ data: "json, name=inviteDate" })
  inviteDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=postcode" })
  postcode?: string;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role?: string;
}
