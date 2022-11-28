import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ArchivedObjectVersionForApiContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changedFields" })
  changedFields?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: number;
}
