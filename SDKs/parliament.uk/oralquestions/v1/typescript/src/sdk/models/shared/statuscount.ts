import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StatusCount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=StatusId" })
  statusId?: number;
}
