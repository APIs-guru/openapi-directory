import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EditVodPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" })
  ondemandId: number;
}


export class EditVodRequestBodyPreorder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=publish_time" })
  publishTime?: string;
}


export class EditVodRequestBodyPublish extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;
}


export class EditVodRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=preorder" })
  preorder?: EditVodRequestBodyPreorder;

  @SpeakeasyMetadata({ data: "json, name=publish" })
  publish?: EditVodRequestBodyPublish;

  @SpeakeasyMetadata({ data: "json, name=publish_when_ready" })
  publishWhenReady?: boolean;
}


export class EditVodSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class EditVodRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EditVodPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.ondemand.page+json" })
  request?: EditVodRequestBody;

  @SpeakeasyMetadata()
  security: EditVodSecurity;
}


export class EditVodResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;

  @SpeakeasyMetadata()
  onDemandPage?: shared.OnDemandPage;
}
