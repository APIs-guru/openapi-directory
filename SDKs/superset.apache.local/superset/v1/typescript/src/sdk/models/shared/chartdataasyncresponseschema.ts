import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ChartDataAsyncResponseSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=channel_id" })
  channelId?: string;

  @Metadata({ data: "json, name=job_id" })
  jobId?: string;

  @Metadata({ data: "json, name=result_url" })
  resultUrl?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=user_id" })
  userId?: string;
}
