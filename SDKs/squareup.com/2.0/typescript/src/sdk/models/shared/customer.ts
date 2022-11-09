import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Address } from "./address";
import { Card } from "./card";
import { CustomerPreferences } from "./customerpreferences";


// Customer
/** 
 * Represents a Square customer profile in the Customer Directory of a Square seller.
**/
export class Customer extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: Address;

  @Metadata({ data: "json, name=birthday" })
  birthday?: string;

  @Metadata({ data: "json, name=cards", elemType: shared.Card })
  cards?: Card[];

  @Metadata({ data: "json, name=company_name" })
  companyName?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=creation_source" })
  creationSource?: string;

  @Metadata({ data: "json, name=email_address" })
  emailAddress?: string;

  @Metadata({ data: "json, name=family_name" })
  familyName?: string;

  @Metadata({ data: "json, name=given_name" })
  givenName?: string;

  @Metadata({ data: "json, name=group_ids" })
  groupIds?: string[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=nickname" })
  nickname?: string;

  @Metadata({ data: "json, name=note" })
  note?: string;

  @Metadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=preferences" })
  preferences?: CustomerPreferences;

  @Metadata({ data: "json, name=reference_id" })
  referenceId?: string;

  @Metadata({ data: "json, name=segment_ids" })
  segmentIds?: string[];

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
