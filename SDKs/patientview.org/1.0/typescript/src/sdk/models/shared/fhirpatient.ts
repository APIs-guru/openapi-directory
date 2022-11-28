import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FhirContact } from "./fhircontact";
import { Group } from "./group";
import { FhirIdentifier } from "./fhiridentifier";
import { FhirPractitioner } from "./fhirpractitioner";



export class FhirPatient extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address1" })
  address1?: string;

  @SpeakeasyMetadata({ data: "json, name=address2" })
  address2?: string;

  @SpeakeasyMetadata({ data: "json, name=address3" })
  address3?: string;

  @SpeakeasyMetadata({ data: "json, name=address4" })
  address4?: string;

  @SpeakeasyMetadata({ data: "json, name=contacts", elemType: FhirContact })
  contacts?: FhirContact[];

  @SpeakeasyMetadata({ data: "json, name=dateOfBirth" })
  dateOfBirth?: Date;

  @SpeakeasyMetadata({ data: "json, name=dateOfBirthNoTime" })
  dateOfBirthNoTime?: string;

  @SpeakeasyMetadata({ data: "json, name=forename" })
  forename?: string;

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender?: string;

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: Group;

  @SpeakeasyMetadata({ data: "json, name=groupCode" })
  groupCode?: string;

  @SpeakeasyMetadata({ data: "json, name=identifier" })
  identifier?: string;

  @SpeakeasyMetadata({ data: "json, name=identifiers", elemType: FhirIdentifier })
  identifiers?: FhirIdentifier[];

  @SpeakeasyMetadata({ data: "json, name=postcode" })
  postcode?: string;

  @SpeakeasyMetadata({ data: "json, name=practitioners", elemType: FhirPractitioner })
  practitioners?: FhirPractitioner[];

  @SpeakeasyMetadata({ data: "json, name=surname" })
  surname?: string;
}
