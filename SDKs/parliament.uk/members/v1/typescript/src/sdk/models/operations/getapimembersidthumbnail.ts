import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetApiMembersIdThumbnailPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiMembersIdThumbnailRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiMembersIdThumbnailPathParams;
}


export class GetApiMembersIdThumbnailResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
