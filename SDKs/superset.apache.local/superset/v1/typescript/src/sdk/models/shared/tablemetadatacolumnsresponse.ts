import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TableMetadataColumnsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=duplicates_constraint" })
  duplicatesConstraint?: string;

  @Metadata({ data: "json, name=keys" })
  keys?: string[];

  @Metadata({ data: "json, name=longType" })
  longType?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
