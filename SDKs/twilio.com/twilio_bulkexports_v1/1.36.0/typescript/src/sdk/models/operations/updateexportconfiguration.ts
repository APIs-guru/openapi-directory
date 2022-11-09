import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEEXPORTCONFIGURATION_SERVERS = [
	"https://bulkexports.twilio.com",
];



export class UpdateExportConfigurationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ResourceType" })
  resourceType: string;
}


export class UpdateExportConfigurationUpdateExportConfigurationRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Enabled;" })
  enabled?: boolean;

  @Metadata({ data: "form, name=WebhookMethod;" })
  webhookMethod?: string;

  @Metadata({ data: "form, name=WebhookUrl;" })
  webhookUrl?: string;
}


export class UpdateExportConfigurationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateExportConfigurationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateExportConfigurationPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateExportConfigurationUpdateExportConfigurationRequest;

  @Metadata()
  security: UpdateExportConfigurationSecurity;
}


export class UpdateExportConfigurationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  bulkexportsV1ExportConfiguration?: shared.BulkexportsV1ExportConfiguration;
}
