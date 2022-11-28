import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateExportCustomJobServerList = [
	"https://bulkexports.twilio.com",
] as const;


export class CreateExportCustomJobPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ResourceType" })
  resourceType: string;
}


export class CreateExportCustomJobCreateExportCustomJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Email;" })
  email?: string;

  @SpeakeasyMetadata({ data: "form, name=EndDay;" })
  endDay: string;

  @SpeakeasyMetadata({ data: "form, name=FriendlyName;" })
  friendlyName: string;

  @SpeakeasyMetadata({ data: "form, name=StartDay;" })
  startDay: string;

  @SpeakeasyMetadata({ data: "form, name=WebhookMethod;" })
  webhookMethod?: string;

  @SpeakeasyMetadata({ data: "form, name=WebhookUrl;" })
  webhookUrl?: string;
}


export class CreateExportCustomJobSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateExportCustomJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateExportCustomJobPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateExportCustomJobCreateExportCustomJobRequest;

  @SpeakeasyMetadata()
  security: CreateExportCustomJobSecurity;
}


export class CreateExportCustomJobResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  bulkexportsV1ExportExportCustomJob?: shared.BulkexportsV1ExportExportCustomJob;
}
