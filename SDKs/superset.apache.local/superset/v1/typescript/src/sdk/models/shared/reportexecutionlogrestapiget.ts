import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReportExecutionLogRestApiGet extends SpeakeasyBase {
  @Metadata({ data: "json, name=end_dttm" })
  endDttm?: Date;

  @Metadata({ data: "json, name=error_message" })
  errorMessage?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=scheduled_dttm" })
  scheduledDttm: Date;

  @Metadata({ data: "json, name=start_dttm" })
  startDttm?: Date;

  @Metadata({ data: "json, name=state" })
  state: string;

  @Metadata({ data: "json, name=uuid" })
  uuid?: string;

  @Metadata({ data: "json, name=value" })
  value?: number;

  @Metadata({ data: "json, name=value_row_json" })
  valueRowJson?: string;
}
