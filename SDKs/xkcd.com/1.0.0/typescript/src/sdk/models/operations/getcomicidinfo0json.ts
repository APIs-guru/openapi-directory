import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetComicIdInfo0JsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comicId" })
  comicId: number;
}


export class GetComicIdInfo0JsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetComicIdInfo0JsonPathParams;
}


export class GetComicIdInfo0JsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
