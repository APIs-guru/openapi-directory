import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Workspace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=identifier" })
  identifier?: string;

  @SpeakeasyMetadata({ data: "json, name=is_master_workspace" })
  isMasterWorkspace?: boolean;
}
