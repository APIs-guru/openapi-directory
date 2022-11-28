import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCuratedSetsSlugPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetCuratedSetsSlugRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCuratedSetsSlugPathParams;
}


export class GetCuratedSetsSlugResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
