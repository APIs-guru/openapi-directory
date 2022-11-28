import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";
import { Role } from "./role";



export class GroupRole extends SpeakeasyBase {
  @SpeakeasyMetadata()
  group?: Group;

  @SpeakeasyMetadata()
  id?: number;

  @SpeakeasyMetadata()
  role?: Role;
}
