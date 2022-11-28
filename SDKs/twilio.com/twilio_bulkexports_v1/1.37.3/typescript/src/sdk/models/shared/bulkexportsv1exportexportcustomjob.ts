import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BulkexportsV1ExportExportCustomJob extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: any;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=end_day" })
  endDay?: string;

  @SpeakeasyMetadata({ data: "json, name=estimated_completion_time" })
  estimatedCompletionTime?: string;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=job_queue_position" })
  jobQueuePosition?: string;

  @SpeakeasyMetadata({ data: "json, name=job_sid" })
  jobSid?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=start_day" })
  startDay?: string;

  @SpeakeasyMetadata({ data: "json, name=webhook_method" })
  webhookMethod?: string;

  @SpeakeasyMetadata({ data: "json, name=webhook_url" })
  webhookUrl?: string;
}
