import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JobAssignment } from "./jobassignment";


// WageSetting
/** 
 * An object representing a team member's wage information.
**/
export class WageSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=is_overtime_exempt" })
  isOvertimeExempt?: boolean;

  @Metadata({ data: "json, name=job_assignments", elemType: shared.JobAssignment })
  jobAssignments?: JobAssignment[];

  @Metadata({ data: "json, name=team_member_id" })
  teamMemberId?: string;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: string;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
