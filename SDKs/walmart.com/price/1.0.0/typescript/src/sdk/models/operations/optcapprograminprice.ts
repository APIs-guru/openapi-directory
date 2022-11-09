import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OptCapProgramInPriceHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @Metadata({ data: "header, style=simple;explode=false;name=WM_CONSUMER.CHANNEL.TYPE" })
  wmConsumerChannelType?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=WM_QOS.CORRELATION_ID" })
  wmQosCorrelationId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=WM_SEC.ACCESS_TOKEN" })
  wmSecAccessToken: string;

  @Metadata({ data: "header, style=simple;explode=false;name=WM_SVC.NAME" })
  wmSvcName: string;
}


export class OptCapProgramInPriceRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=subsidyEnrolled" })
  subsidyEnrolled?: boolean;

  @Metadata({ data: "json, name=subsidyPreference" })
  subsidyPreference?: boolean;
}


export class OptCapProgramInPriceRequest extends SpeakeasyBase {
  @Metadata()
  headers: OptCapProgramInPriceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: OptCapProgramInPriceRequestBody;
}


export class OptCapProgramInPrice200ApplicationJsonStatusInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=subsidyEnrolled" })
  subsidyEnrolled?: boolean;

  @Metadata({ data: "json, name=subsidyPreference" })
  subsidyPreference?: boolean;
}


export class OptCapProgramInPrice200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=martId" })
  martId?: string;

  @Metadata({ data: "json, name=statusInfo" })
  statusInfo?: OptCapProgramInPrice200ApplicationJsonStatusInfo;
}


export class OptCapProgramInPriceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  optCapProgramInPrice200ApplicationJsonObject?: OptCapProgramInPrice200ApplicationJson;
}
