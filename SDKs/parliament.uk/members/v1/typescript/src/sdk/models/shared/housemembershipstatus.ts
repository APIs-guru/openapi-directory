import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class HouseMembershipStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=statusDescription" })
  statusDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=statusId" })
  statusId?: number;

  @SpeakeasyMetadata({ data: "json, name=statusIsActive" })
  statusIsActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=statusNotes" })
  statusNotes?: string;

  @SpeakeasyMetadata({ data: "json, name=statusStartDate" })
  statusStartDate?: Date;
}
