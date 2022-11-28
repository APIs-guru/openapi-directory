import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGroupsByIdsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=group_ids" })
  groupIds: string;
}


export class GetGroupsByIdsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Implicit?: shared.SchemeOauth2Implicit;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Code?: shared.SchemeOauth2Code;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey?: shared.SchemeApiKey;
}


export class GetGroupsByIdsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGroupsByIdsQueryParams;

  @SpeakeasyMetadata()
  security: GetGroupsByIdsSecurity;
}


export class GetGroupsByIdsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Group })
  groups?: shared.Group[];

  @SpeakeasyMetadata()
  statusCode: number;
}
