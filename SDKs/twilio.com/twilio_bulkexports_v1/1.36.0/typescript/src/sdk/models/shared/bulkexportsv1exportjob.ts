import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BulkexportsV1ExportJob extends SpeakeasyBase {
  @Metadata({ data: "json, name=details" })
  details?: any;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=end_day" })
  endDay?: string;

  @Metadata({ data: "json, name=estimated_completion_time" })
  estimatedCompletionTime?: string;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=job_queue_position" })
  jobQueuePosition?: string;

  @Metadata({ data: "json, name=job_sid" })
  jobSid?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=start_day" })
  startDay?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=webhook_method" })
  webhookMethod?: string;

  @Metadata({ data: "json, name=webhook_url" })
  webhookUrl?: string;
}
