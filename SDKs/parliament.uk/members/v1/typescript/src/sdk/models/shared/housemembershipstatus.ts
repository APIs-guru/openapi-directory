import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class HouseMembershipStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=statusDescription" })
  statusDescription?: string;

  @Metadata({ data: "json, name=statusId" })
  statusId?: number;

  @Metadata({ data: "json, name=statusIsActive" })
  statusIsActive?: boolean;

  @Metadata({ data: "json, name=statusNotes" })
  statusNotes?: string;

  @Metadata({ data: "json, name=statusStartDate" })
  statusStartDate?: Date;
}
