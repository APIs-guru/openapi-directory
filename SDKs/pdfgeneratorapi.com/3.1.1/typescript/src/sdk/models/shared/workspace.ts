import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Workspace extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=identifier" })
  identifier?: string;

  @Metadata({ data: "json, name=is_master_workspace" })
  isMasterWorkspace?: boolean;
}
