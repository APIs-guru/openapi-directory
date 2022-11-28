import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OptCapProgramInPriceHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_CONSUMER.CHANNEL.TYPE" })
  wmConsumerChannelType?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_QOS.CORRELATION_ID" })
  wmQosCorrelationId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_SEC.ACCESS_TOKEN" })
  wmSecAccessToken: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=WM_SVC.NAME" })
  wmSvcName: string;
}


export class OptCapProgramInPriceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=subsidyEnrolled" })
  subsidyEnrolled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=subsidyPreference" })
  subsidyPreference?: boolean;
}


export class OptCapProgramInPrice200ApplicationJsonStatusInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=subsidyEnrolled" })
  subsidyEnrolled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=subsidyPreference" })
  subsidyPreference?: boolean;
}


export class OptCapProgramInPrice200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=martId" })
  martId?: string;

  @SpeakeasyMetadata({ data: "json, name=statusInfo" })
  statusInfo?: OptCapProgramInPrice200ApplicationJsonStatusInfo;
}


export class OptCapProgramInPriceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: OptCapProgramInPriceHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: OptCapProgramInPriceRequestBody;
}


export class OptCapProgramInPriceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  optCapProgramInPrice200ApplicationJsonObject?: OptCapProgramInPrice200ApplicationJson;
}
