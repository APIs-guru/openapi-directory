import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVideoPrivacyDomainsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class GetVideoPrivacyDomainsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetVideoPrivacyDomainsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVideoPrivacyDomainsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetVideoPrivacyDomainsQueryParams;
}


export class GetVideoPrivacyDomainsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Domain })
  domains?: shared.Domain[];

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
