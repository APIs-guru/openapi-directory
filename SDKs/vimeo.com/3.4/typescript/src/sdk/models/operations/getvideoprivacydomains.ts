import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVideoPrivacyDomainsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class GetVideoPrivacyDomainsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetVideoPrivacyDomainsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVideoPrivacyDomainsPathParams;

  @Metadata()
  queryParams: GetVideoPrivacyDomainsQueryParams;
}


export class GetVideoPrivacyDomainsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Domain })
  domains?: shared.Domain[];

  @Metadata()
  legacyError?: shared.LegacyError;
}
