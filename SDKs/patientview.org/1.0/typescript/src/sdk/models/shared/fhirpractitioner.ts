import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FhirContact } from "./fhircontact";


export class FhirPractitioner extends SpeakeasyBase {
  @Metadata({ data: "json, name=address1" })
  address1?: string;

  @Metadata({ data: "json, name=address2" })
  address2?: string;

  @Metadata({ data: "json, name=address3" })
  address3?: string;

  @Metadata({ data: "json, name=address4" })
  address4?: string;

  @Metadata({ data: "json, name=allowInviteGp" })
  allowInviteGp?: boolean;

  @Metadata({ data: "json, name=contacts", elemType: shared.FhirContact })
  contacts?: FhirContact[];

  @Metadata({ data: "json, name=gender" })
  gender?: string;

  @Metadata({ data: "json, name=groupCode" })
  groupCode?: string;

  @Metadata({ data: "json, name=identifier" })
  identifier?: string;

  @Metadata({ data: "json, name=inviteDate" })
  inviteDate?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=postcode" })
  postcode?: string;

  @Metadata({ data: "json, name=role" })
  role?: string;
}
