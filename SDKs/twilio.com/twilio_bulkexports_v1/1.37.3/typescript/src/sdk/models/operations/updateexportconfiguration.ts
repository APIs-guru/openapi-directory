import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateExportConfigurationServerList = [
	"https://bulkexports.twilio.com",
] as const;


export class UpdateExportConfigurationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ResourceType" })
  resourceType: string;
}


export class UpdateExportConfigurationUpdateExportConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Enabled;" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "form, name=WebhookMethod;" })
  webhookMethod?: string;

  @SpeakeasyMetadata({ data: "form, name=WebhookUrl;" })
  webhookUrl?: string;
}


export class UpdateExportConfigurationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateExportConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateExportConfigurationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateExportConfigurationUpdateExportConfigurationRequest;

  @SpeakeasyMetadata()
  security: UpdateExportConfigurationSecurity;
}


export class UpdateExportConfigurationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  bulkexportsV1ExportConfiguration?: shared.BulkexportsV1ExportConfiguration;
}
