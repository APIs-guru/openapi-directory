import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChartDataAsyncResponseSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channel_id" })
  channelId?: string;

  @SpeakeasyMetadata({ data: "json, name=job_id" })
  jobId?: string;

  @SpeakeasyMetadata({ data: "json, name=result_url" })
  resultUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: string;
}
