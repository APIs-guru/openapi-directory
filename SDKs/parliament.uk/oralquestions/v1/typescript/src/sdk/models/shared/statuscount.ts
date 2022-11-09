import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StatusCount extends SpeakeasyBase {
  @Metadata({ data: "json, name=Count" })
  count?: number;

  @Metadata({ data: "json, name=StatusId" })
  statusId?: number;
}
