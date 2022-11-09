import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Member } from "./member";
import { Staff } from "./staff";


export class MembersStaff extends SpeakeasyBase {
  @Metadata({ data: "json, name=member" })
  member?: Member;

  @Metadata({ data: "json, name=staff", elemType: shared.Staff })
  staff?: Staff[];
}
