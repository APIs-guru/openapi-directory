import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReportExecutionLogRestApiGet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end_dttm" })
  endDttm?: Date;

  @SpeakeasyMetadata({ data: "json, name=error_message" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=scheduled_dttm" })
  scheduledDttm: Date;

  @SpeakeasyMetadata({ data: "json, name=start_dttm" })
  startDttm?: Date;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: string;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;

  @SpeakeasyMetadata({ data: "json, name=value_row_json" })
  valueRowJson?: string;
}
