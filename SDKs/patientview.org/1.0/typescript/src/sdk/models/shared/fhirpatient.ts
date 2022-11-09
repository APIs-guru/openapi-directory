import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FhirContact } from "./fhircontact";
import { Group } from "./group";
import { FhirIdentifier } from "./fhiridentifier";
import { FhirPractitioner } from "./fhirpractitioner";


export class FhirPatient extends SpeakeasyBase {
  @Metadata({ data: "json, name=address1" })
  address1?: string;

  @Metadata({ data: "json, name=address2" })
  address2?: string;

  @Metadata({ data: "json, name=address3" })
  address3?: string;

  @Metadata({ data: "json, name=address4" })
  address4?: string;

  @Metadata({ data: "json, name=contacts", elemType: shared.FhirContact })
  contacts?: FhirContact[];

  @Metadata({ data: "json, name=dateOfBirth" })
  dateOfBirth?: Date;

  @Metadata({ data: "json, name=dateOfBirthNoTime" })
  dateOfBirthNoTime?: string;

  @Metadata({ data: "json, name=forename" })
  forename?: string;

  @Metadata({ data: "json, name=gender" })
  gender?: string;

  @Metadata({ data: "json, name=group" })
  group?: Group;

  @Metadata({ data: "json, name=groupCode" })
  groupCode?: string;

  @Metadata({ data: "json, name=identifier" })
  identifier?: string;

  @Metadata({ data: "json, name=identifiers", elemType: shared.FhirIdentifier })
  identifiers?: FhirIdentifier[];

  @Metadata({ data: "json, name=postcode" })
  postcode?: string;

  @Metadata({ data: "json, name=practitioners", elemType: shared.FhirPractitioner })
  practitioners?: FhirPractitioner[];

  @Metadata({ data: "json, name=surname" })
  surname?: string;
}
