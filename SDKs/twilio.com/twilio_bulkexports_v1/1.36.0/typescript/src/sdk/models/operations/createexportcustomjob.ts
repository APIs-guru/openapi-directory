import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEEXPORTCUSTOMJOB_SERVERS = [
	"https://bulkexports.twilio.com",
];



export class CreateExportCustomJobPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ResourceType" })
  resourceType: string;
}


export class CreateExportCustomJobCreateExportCustomJobRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Email;" })
  email?: string;

  @Metadata({ data: "form, name=EndDay;" })
  endDay: string;

  @Metadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;

  @Metadata({ data: "form, name=StartDay;" })
  startDay: string;

  @Metadata({ data: "form, name=WebhookMethod;" })
  webhookMethod?: string;

  @Metadata({ data: "form, name=WebhookUrl;" })
  webhookUrl?: string;
}


export class CreateExportCustomJobSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateExportCustomJobRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateExportCustomJobPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateExportCustomJobCreateExportCustomJobRequest;

  @Metadata()
  security: CreateExportCustomJobSecurity;
}


export class CreateExportCustomJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  bulkexportsV1ExportExportCustomJob?: shared.BulkexportsV1ExportExportCustomJob;
}
