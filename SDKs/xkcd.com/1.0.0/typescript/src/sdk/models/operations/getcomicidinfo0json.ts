import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetComicIdInfo0JsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=comicId" })
  comicId: number;
}


export class GetComicIdInfo0JsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetComicIdInfo0JsonPathParams;
}


export class GetComicIdInfo0JsonResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
