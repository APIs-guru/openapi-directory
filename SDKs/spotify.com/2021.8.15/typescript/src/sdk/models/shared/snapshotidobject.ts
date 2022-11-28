import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SnapshotIdObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=snapshot_id" })
  snapshotId?: string;
}
