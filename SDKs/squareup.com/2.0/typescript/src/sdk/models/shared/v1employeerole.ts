import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// V1EmployeeRole
/** 
 * V1EmployeeRole
**/
export class V1EmployeeRole extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=is_owner" })
  isOwner?: boolean;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=permissions" })
  permissions: string[];

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;
}
