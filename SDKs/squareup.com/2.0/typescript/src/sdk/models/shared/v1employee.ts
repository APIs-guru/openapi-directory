import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// V1Employee
/** 
 * Represents one of a business's employees.
**/
export class V1Employee extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorized_location_ids" })
  authorizedLocationIds?: string[];

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=external_id" })
  externalId?: string;

  @Metadata({ data: "json, name=first_name" })
  firstName: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=last_name" })
  lastName: string;

  @Metadata({ data: "json, name=role_ids" })
  roleIds?: string[];

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}
