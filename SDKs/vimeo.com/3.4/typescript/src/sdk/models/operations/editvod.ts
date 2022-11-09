import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EditVodPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" })
  ondemandId: number;
}


export class EditVodRequestBodyPreorder extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=publish_time" })
  publishTime?: string;
}


export class EditVodRequestBodyPublish extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;
}


export class EditVodRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=preorder" })
  preorder?: EditVodRequestBodyPreorder;

  @Metadata({ data: "json, name=publish" })
  publish?: EditVodRequestBodyPublish;

  @Metadata({ data: "json, name=publish_when_ready" })
  publishWhenReady?: boolean;
}


export class EditVodSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class EditVodRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EditVodPathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.ondemand.page+json" })
  request?: EditVodRequestBody;

  @Metadata()
  security: EditVodSecurity;
}


export class EditVodResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata()
  onDemandPage?: shared.OnDemandPage;
}
