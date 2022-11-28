import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TableMetadataColumnsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duplicates_constraint" })
  duplicatesConstraint?: string;

  @SpeakeasyMetadata({ data: "json, name=keys" })
  keys?: string[];

  @SpeakeasyMetadata({ data: "json, name=longType" })
  longType?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
