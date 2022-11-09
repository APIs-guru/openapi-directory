import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ArchivedObjectVersionForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=changedFields" })
  changedFields?: string[];

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=version" })
  version?: number;
}
