import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Member } from "./member";
import { Staff } from "./staff";



export class MembersStaff extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=member" })
  member?: Member;

  @SpeakeasyMetadata({ data: "json, name=staff", elemType: Staff })
  staff?: Staff[];
}
